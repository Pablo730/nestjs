import { AwsBilling } from 'src/domain/aws-billing/entities/aws-billing.entity';
import { AwsResource } from 'src/domain/aws-resource/entities/aws-resource.entity';
import { createConnection } from 'typeorm';

export const OracleDatabaseProviders = [
	{
		provide: 'ORACLE_DATABASE_CONNECTION',
		useFactory: async () =>
			await createConnection({
				type: 'oracle',
				host: process.env.ORACLE_HOST,
				port: +process.env.ORACLE_PORT,
				username: process.env.ORACLE_USERNAME,
				password: process.env.ORACLE_PASSWORD,
				database: process.env.ORACLE_DATABASE,
				entities: [AwsResource, AwsBilling],
				synchronize: true,
				logging: true,
			}),
	},
];
