import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from './common/env-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(env.PORT);
  console.log(`Serve is running on ${env.PORT}`);
}
void bootstrap()
  .then(() => {
    console.log(
      `API DIET - Aplicaçõa rodando em: http://localhost:${env.PORT}`,
    );
  })
  .catch((error) => {
    console.error(
      `API DIET - Erro durantea inicialização da aplicação: `,
      error,
    );
  });
