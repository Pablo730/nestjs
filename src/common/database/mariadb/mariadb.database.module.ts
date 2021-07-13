import { Module } from '@nestjs/common';
import { databaseProviders } from './mariadb.database.providers';

@Module({
	providers: [...databaseProviders],
	exports: [...databaseProviders],
})
export class MariadbDatabaseModule { }