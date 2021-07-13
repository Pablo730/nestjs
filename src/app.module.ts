import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { PhotoModule } from './domain/photo/photo.module';
import { UsersModule } from './domain/users/users.module';
import { ProductsModule } from './domain/products/products.module';


@Module({
	imports: [
		ConfigModule.forRoot(),
		PhotoModule,
		UsersModule,
		ProductsModule
	],
	controllers: [],
	providers: [],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer.apply(LoggerMiddleware).forRoutes('*');
	}
}