import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  await app.listen(process.env.port ?? 6000);
}
bootstrap().catch((err) => {
  console.error('Failed to start Books microservice', err);
  process.exit(1);
});
