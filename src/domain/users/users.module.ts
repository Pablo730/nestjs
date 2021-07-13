import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MariadbDatabaseModule } from 'src/common/database/mariadb/mariadb.database.module';

@Module({
	imports: [MariadbDatabaseModule],
	controllers: [UsersController],
	providers: [UsersService]
})
export class UsersModule { }
