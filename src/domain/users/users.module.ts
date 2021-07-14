import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { MysqlDatabaseModule } from 'src/common/database/mysql/mysql.database.module';

@Module({
	imports: [MysqlDatabaseModule],
	controllers: [UsersController],
	providers: [...usersProviders, UsersService],
})
export class UsersModule { }
