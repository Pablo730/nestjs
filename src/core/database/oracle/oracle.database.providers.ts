import { AwsBilling } from 'src/domain/aws-billing/entities/aws-billing.entity';
import { AwsResource } from 'src/domain/aws-resource/entities/aws-resource.entity';
import { createConnection } from 'typeorm';

export const OracleDatabaseProviders = [
	{
		provide: 'ORACLE_DATABASE_CONNECTION',
		useFactory: async () =>
			await createConnection({
				type: 'oracle',
				username: 'gtest',
				host: '27.96.134.173',//process.env.ORACLE_HOST,
				port: 9020,
				password: 'gtest',
				entities: [AwsBilling],
				synchronize: true,
				logging: true,
			}),
	},
];
