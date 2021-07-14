import { Module } from '@nestjs/common';
import { GhostingService } from './ghosting.service';
import { GhostingController } from './ghosting.controller';
import { MysqlDatabaseModule } from 'src/common/database/mysql/mysql.database.module';
import { usersProviders } from '../users/users.providers';

@Module({
	imports: [MysqlDatabaseModule],
	controllers: [GhostingController],
	providers: [...usersProviders, GhostingService]
})
export class GhostingModule { }
