import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

function setupSwaggerDoc(app) {
  const config = new DocumentBuilder()
    .setTitle('Business Invetory API')
    .setDescription('This is the documentation of the business inventory api')
    .setVersion('1.0')
    //.addTag('business_inventory')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      `${controllerKey}=>${methodKey}`,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwaggerDoc(app);
  await app.listen(3000);
}
bootstrap();
