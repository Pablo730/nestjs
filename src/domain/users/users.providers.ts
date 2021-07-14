import { Connection } from 'typeorm';
import { Users } from './entities/user.entity';

export const usersProviders = [
	{
		provide: 'USERS_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Users),
		inject: ['MYSQL_DATABASE_CONNECTION'],
	},
];
