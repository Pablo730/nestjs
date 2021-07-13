import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;

	const config = new DocumentBuilder()
		.setTitle('NestJS+TypeORM API')
		.setDescription('가비아 NestJS+TypeORM Study API docs')
		.setVersion('0.0.1')
		// .addTag('AWS-TEST')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	const customOptions: SwaggerCustomOptions = { customSiteTitle: 'Gabia NestJS API Docs' };
	SwaggerModule.setup('api', app, document, customOptions);

	await app.listen(port);
	console.log(`listening on port ${port}}`);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
bootstrap();
