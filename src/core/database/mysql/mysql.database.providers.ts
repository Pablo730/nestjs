import { Ghosting } from 'src/domain/ghosting/entities/ghosting.entity';
import { User } from 'src/domain/user/entities/user.entity';
import { createConnection } from 'typeorm';

export const MysqlDatabaseProviders = [
	// {
	// 	provide: 'MYSQL_DATABASE_CONNECTION',
	// 	useFactory: async () =>
	// 		await createConnection({
	// 			type: 'mysql',
	// 			host: process.env.MYSQL_HOST,
	// 			port: +process.env.MYSQL_PORT,
	// 			username: process.env.MYSQL_USERNAME,
	// 			password: process.env.MYSQL_PASSWORD,
	// 			database: process.env.MYSQL_DATABASE,
	// 			entities: [User, Ghosting],
	// 			synchronize: true,
	// 			logging: true,
	// 		}),
	// },
];
