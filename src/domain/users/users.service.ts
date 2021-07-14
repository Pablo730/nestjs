import { Inject, Injectable } from '@nestjs/common';
import { Repository, Transaction } from 'typeorm';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@Inject('USERS_REPOSITORY')
		private usersRepository: Repository<Users>,
	) { }

	@Transaction()
	async join(requestUserDto: RequestUserDto) {
		const user = await this.usersRepository.findOne();


		return this.usersRepository.create(requestUserDto);
	}

	login(requestUserDto: RequestUserDto) {
		return this.usersRepository.findOne(requestUserDto);
	}

	logout() {
		return '';
	}

	findOne(id: number) {
		return this.usersRepository.findOne();
	}

	update(id: number, requestUserDto: RequestUserDto) {
		return this.usersRepository.findOne();
	}

	remove(id: number) {
		return this.usersRepository.findOne();
	}
}
