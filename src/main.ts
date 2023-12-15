import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => {
    console.log(`Server is starting on port: ${PORT}`);
    console.log(`origin is: ${process.env.FRONTEND_URL}`);
  });
  const config = new DocumentBuilder()
    .setTitle('Strategy Simulator Dolfy')
    .setDescription('smart marketing strategy learning')
    .setVersion('1.0')
    .addTag('dolfy')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
}
start();
