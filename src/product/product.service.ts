import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { TrademarkService } from 'src/trademark/trademark.service';
import { EditProductDto } from './dto/edit-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
    private trademarkService: TrademarkService,
  ) {}

  async createProduct(dto: CreateProductDto): Promise<Product> {
    let trademark = await this.trademarkService.getByName(dto.trademark);

    if (!trademark) {
      trademark = await this.trademarkService.createTrademark({
        name: dto.trademark,
      });
    }
    const id = trademark.id;
    delete dto.trademark;
    const prod = { ...dto, trademarkId: id };
    const product = await this.productRepository.create(prod);
    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productRepository.findAll({
      include: { all: true },
    });
    return products;
  }

  async getProductsByGame(gameId: number, round: number): Promise<Product[]> {
    const products = await this.productRepository.findAll({
      where: { gameId, round },
      order: ['teamId', 'trademarkId'],
      include: { all: true },
    });
    return products;
  }

  async getTeamProducts(
    gameId: number,
    round: number,
    teamId: number,
  ): Promise<Product[]> {
    const products = await this.productRepository.findAll({
      where: { gameId, round, teamId },
      order: ['trademarkId'],
      include: { all: true },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    return products;
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findByPk(id);
    return product;
  }

  async updateProduct(id: number, product: any) {
    try {
      const num = await this.productRepository.update(product, {
        where: { id },
      });
      return num;
    } catch (error) {
      throw error.message;
    }
  }

  async removeById(id: number): Promise<number> {
    try {
      const num = await this.productRepository.destroy({ where: { id } });
      return num;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async transitionProduct(gameId: number, round: number) {
    const products = await this.productRepository.findAll({
      where: { gameId, round },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (products?.length > 0) {
      products.forEach(async (item) => {
        if (item.available_till == 12) {
          const model = item.model.split('_')[0]; //turn off _upgraded
          const dto = {
            gameId: Number(gameId),
            round: Number(round + 1),
            productId: item.productId,
            trademarkId: item.trademarkId,
            model: model,
            available_from: 1,
            available_till: 12,
            material: item.material,
            manufacturing: item.manufacturing,
            design_type: item.design_type,
            design: item.design,
            variations: item.variations,
            advanced_feature: item.advanced_feature,
            sales_plan: item.sales_plan,
            production_plan: item.production_plan,
            investments: 0,
            unit_cost: item.unit_cost,
            retail_price: item.retail_price,
            price: item.price,
            teamId: item.teamId,
          };
          try {
            await this.productRepository.create(dto);
          } catch (error) {
            new HttpException(
              `can't create product, error: ${error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      });
    }
  }
}
