import { Module } from '@nestjs/common';
import { GhostingService } from './ghosting.service';
import { GhostingController } from './ghosting.controller';
// import { MysqlDatabaseModule } from 'src/core/database/mysql/mysql.database.module';
// import { ghostingProviders } from './ghosting.provider';

@Module({
	// imports: [MysqlDatabaseModule],
	controllers: [GhostingController],
	providers: [
		// ...ghostingProviders,
		GhostingService]
})
export class GhostingModule { }
