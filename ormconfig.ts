
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AwsBilling } from 'src/domain/aws-billing/entities/aws-billing.entity';
import { AwsResource } from 'src/domain/aws-resource/entities/aws-resource.entity';

const config: TypeOrmModuleOptions = {
	type: 'oracle',
	host: process.env.ORACEL_HOST,
	port: +process.env.ORACEL_PORT,
	username: process.env.ORACEL_USERNAME,
	password: process.env.ORACEL_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [
		AwsBilling,
		AwsResource
	],
	sid: "xe",
	// migrations: [__dirname + '/src/migrations/*.ts'],
	// cli: { migrationsDir: 'src/migrations' },
	autoLoadEntities: true,
	// charset: 'utf8mb4',
	synchronize: true,
	logging: true,
	keepConnectionAlive: true,
};

export = config;
