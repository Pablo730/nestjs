import { Module } from '@nestjs/common';
import { OracleDatabaseProviders } from './oracle.database.providers';

@Module({
	providers: [...OracleDatabaseProviders],
	exports: [...OracleDatabaseProviders],
})
export class OracleDatabaseModule { }
