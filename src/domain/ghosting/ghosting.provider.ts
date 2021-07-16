import { Connection } from 'typeorm';
import { Ghosting } from './entities/ghosting.entity';

export const ghostingProviders = [
	{
		// provide: 'GHOSTING_REPOSITORY',
		// useFactory: (connection: Connection) => connection.getRepository(Ghosting),
		// inject: ['MYSQL_DATABASE_CONNECTION'],
	},
];
