import { Module } from '@nestjs/common';
import { MysqlDatabaseProviders } from './mysql.database.providers';

@Module({
	providers: [...MysqlDatabaseProviders],
	exports: [...MysqlDatabaseProviders],
})
export class MysqlDatabaseModule { }
