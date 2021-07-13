import { Photo } from 'src/domain/photo/entity/photo.entity';
import { Users } from 'src/domain/users/entities/user.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: async () => await createConnection({
			type: 'mariadb',
			host: process.env.MARIADB_HOST,
			port: 3306,
			username: process.env.MARIADB_USERNAME,
			password: process.env.MARIADB_PASSWORD,
			database: process.env.MARIADB_DATABASE,
			entities: [
				Photo,
				Users,
			],
			synchronize: false,
			logging: true,
		}),
	},
];