import { Module } from '@nestjs/common';
import { MariadbDatabaseProviders } from './mariadb.database.providers';

@Module({
	providers: [...MariadbDatabaseProviders],
	exports: [...MariadbDatabaseProviders],
})
export class MariadbDatabaseModule { }
