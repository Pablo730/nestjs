import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from 'ormconfig';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './domain/user/user.module';
import { AwsBillingModule } from './domain/aws-billing/aws-billing.module';
import { AwsResourceModule } from './domain/aws-resource/aws-resource.module';
import { GhostingModule } from './domain/ghosting/ghosting.module';
import { AwsBilling } from './domain/aws-billing/entities/aws-billing.entity';
import { AwsResource } from './domain/aws-resource/entities/aws-resource.entity';
import { Ghosting } from './domain/ghosting/entities/ghosting.entity';
import { User } from './domain/user/entities/user.entity';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';

@Module({
	imports: [
		ConfigModule.forRoot({
			// envFilePath: '.env.production',
			envFilePath: '.env.development',
		}),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				name: "mysql",
				type: 'mysql',
				host: process.env.MYSQL_HOST,
				port: Number(process.env.MYSQL_PORT),
				username: process.env.MYSQL_USERNAME,
				password: process.env.MYSQL_PASSWORD,
				database: process.env.MYSQL_DATABASE,
				entities: [User, Ghosting],
				synchronize: false,
				logging: true,
				keepConnectionAlive: false
			})
		}),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'oracle',
				host: process.env.ORACEL_HOST,
				port: Number(process.env.ORACEL_PORT),
				username: process.env.ORACEL_USERNAME,
				password: process.env.ORACEL_PASSWORD,
				sid: 'xe',
				entities: [AwsBilling, AwsResource],
				synchronize: false,
				logging: true,
				keepConnectionAlive: false,
			})
		}),
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
