import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from 'ormconfig';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './domain/users/users.module';
import { AwsBillingModule } from './domain/aws-billing/aws-billing.module';
import { AwsResourceModule } from './domain/aws-resource/aws-resource.module';
import { GhostingModule } from './domain/ghosting/ghosting.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			// envFilePath: '.env.production',
			envFilePath: '.env.development',
		}),
		TypeOrmModule.forRoot(ormconfig),
		UsersModule,
		AwsBillingModule,
		AwsResourceModule,
		GhostingModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer.apply(LoggerMiddleware).forRoutes('*');
	}
}
