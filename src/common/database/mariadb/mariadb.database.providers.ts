import { Users } from 'src/domain/users/entities/user.entity';
import { createConnection } from 'typeorm';

export const MariadbDatabaseProviders = [
	{
		provide: 'MARIADB_DATABASE_CONNECTION',
		useFactory: async () =>
			await createConnection({
				type: 'mariadb',
				host: process.env.MARIADB_HOST,
				port: +process.env.MARIADB_PORT,
				username: process.env.MARIADB_USERNAME,
				password: process.env.MARIADB_PASSWORD,
				database: process.env.MARIADB_DATABASE,
				entities: [Users],
				synchronize: true,
				logging: true,
			}),
	},
];
