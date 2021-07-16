import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
// import { usersProviders } from './user.providers';
// import { MysqlDatabaseModule } from 'src/core/database/mysql/mysql.database.module';

@Module({
	imports: [
		//MysqlDatabaseModule
		TypeOrmModule.forFeature([User]),
	],
	providers: [
		// ...usersProviders,
		UsersService,
	],
	exports: [UsersService],
	controllers: [UsersController],
})
export class UsersModule { }

