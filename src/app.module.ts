import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';

import { User } from './users/users.model';
import { Game } from './game/game.model';
import { Team } from './team/team.model';
import { MarketSegment } from './market-segment/market-segment.model';
import { Token } from './token/token.model';
import { Segment } from './segment/segment.model';
import { Promo } from './promo/promo.model';
import { Chain } from './chain/chain.model';
import { Product } from './product/product.model';
import { AdvancedFeature } from './advanced-features/advanced-features.model';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { TeamModule } from './team/team.module';
import { SegmentModule } from './segment/segment.module';
import { TokenModule } from './token/token.module';
import { PromoModule } from './promo/promo.module';
import { ChainModule } from './chain/chain.module';
import { ProductModule } from './product/product.module';
import { AdvancedFeaturesModule } from './advanced-features/advanced-features.module';
import { MarketSegmentModule } from './market-segment/market-segment.module';
import { TrademarkModule } from './trademark/trademark.module';
import { Trademark } from './trademark/trademark.model';
import { ChannelTrademark } from './channel/channel-trademark.model';
import { Channel } from './channel/channel.model';
import { ChannelModule } from './channel/channel.module';
import { SpotModule } from './spot/spot.module';
import { Spot } from './spot/spot.model';
import { ResourceModule } from './resource/resource.module';
import { Resource } from './resource/resource.model';
import { InstituteModule } from './institute/institute.module';
import { Institute } from './institute/institute.model';
import { PromotionModule } from './promotion/promotion.module';
import { Promotion } from './promotion/promotion.model';
import { MediaCostsModule } from './media-costs/media-costs.module';
import { MediaCoverageModule } from './media-coverage/media-coverage.module';
import { MediaCosts } from './media-costs/media-costs.model';
import { MediaCoverage } from './media-coverage/media-coverage.model';
import { FinancesModule } from './finances/finances.module';
import { IntermediaryModule } from './intermediary/intermediary.module';
import { AwarenessModule } from './awareness/awareness.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { MonthSalesModule } from './month-sales/month-sales.module';
import { SalesModule } from './sales/sales.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'build'),
    }),
    MulterModule.register({
      dest: path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'frontend',
        'dist',
        'img',
      ),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'postgres', //process.env.POSTGRES_USER
      password: 'root',
      database: 'simulator', //process.env.POSTGRES_DB
      models: [
        User,
        Game,
        Team,
        Segment,
        MarketSegment,
        Token,
        Promo,
        Chain,
        Product,
        AdvancedFeature,
        Trademark,
        Channel,
        ChannelTrademark,
        Spot,
        Resource,
        Institute,
        Promotion,
        MediaCosts,
        MediaCoverage,
      ],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    GameModule,
    TeamModule,
    SegmentModule,
    TokenModule,
    PromoModule,
    ChainModule,
    ProductModule,
    AdvancedFeaturesModule,
    MarketSegmentModule,
    TrademarkModule,
    ChannelModule,
    SpotModule,
    ResourceModule,
    InstituteModule,
    PromotionModule,
    MediaCostsModule,
    MediaCoverageModule,
    FinancesModule,
    IntermediaryModule,
    AwarenessModule,
    LoyaltyModule,
    MonthSalesModule,
    SalesModule,
  ],
})
export class AppModule {}
