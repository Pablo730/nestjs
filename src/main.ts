import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;

	// Swagger
	const config = new DocumentBuilder()
		.setTitle('가비아 NestJS+TypeORM API docs')
		.setDescription('NestJS+TypeORM sample API made By Pablo')
		.setVersion('0.0.1')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	const customOptions: SwaggerCustomOptions = {
		customSiteTitle: 'Gabia NestJS API Docs',
	};
	SwaggerModule.setup('api', app, document, customOptions);

	await app.listen(port);
	console.log(`listening on port ${port}`);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
bootstrap();
