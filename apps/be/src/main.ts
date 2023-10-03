import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const env = configService.get('NODE_ENV');
  await app.listen(port);
  console.log('Environment:', env);
  console.log(`Server is listening port ${port}.`);
}
bootstrap();