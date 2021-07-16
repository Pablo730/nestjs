import { HttpException, Injectable } from '@nestjs/common'
import { InjectConnection, InjectRepository } from '@nestjs/typeorm'
import { exception } from 'console'
import { exit } from 'process'
import { Connection, getConnection, IsNull, Repository, Transaction } from 'typeorm'
import { Transactional } from 'typeorm-transactional-cls-hooked'
import { RequestUserDto } from './dto/request-user.dto'
import { ResponseUserDto } from './dto/response-user.dto'
import { User } from './entities/user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UsersService {
	constructor(
		@InjectConnection()
		private connection: Connection,
	) { }

	private queryRunner = this.connection.createQueryRunner()
	private usersRepository: Repository<User> = this.queryRunner.manager.getCustomRepository(UserRepository)


	public async join(requestUserDto: RequestUserDto) {
		const user: User = await this.usersRepository.findOne({
			where: { userId: requestUserDto.userId, isActive: true }
		});
		if (user) {
			throw new HttpException("already registered users.", 400);
		}
		await this.queryRunner.startTransaction();

		try {
			const saveUser: User = await this.usersRepository.save(new User().requestSave(requestUserDto), { transaction: false });
			await this.queryRunner.rollbackTransaction();
			// await queryRunner.commitTransaction();
		} catch (err) {
			await this.queryRunner.rollbackTransaction();
		}
		// finally {
		// 	await this.queryRunner.release();
		// }

		// await this.connection.createQueryRunner().connect();
		// await this.connection.createQueryRunner().startTransaction();
		// const user: User = await this.usersRepository.findOne({
		// 	where: { userId: requestUserDto.userId, isActive: true }
		// });
		// if (user) {
		// 	throw new HttpException("already registered users.", 400);
		// }
		// const saveUser: User = await this.usersRepository.save(new User().requestSave(requestUserDto), { transaction: false });
		// throw new exception();
		// console.log('aaa');
		// console.log(saveUser.responseSave(new ResponseUserDto()).createdAt);
		// await this.usersRepository.save(new User().requestSave(requestUserDto), { transaction: false, });
		// console.log('bbb');
		// // this.usersRepository.save(saveUser, { transaction: false });
		// console.log('ccc')
		// console.log(saveUser.responseSave(new ResponseUserDto()).createdAt);
		// console.log('ddd');
		// // this.usersRepository.save(saveUser);
		// console.log('bbb');
		// console.log('ccc')
		// // this.usersRepository.save(saveUser);
		// console.log('ddd');

		// return saveUser.responseSave(new ResponseUserDto());
	}

	// public async login(requestUserDto: RequestUserDto) {
	// 	return this.usersRepository.findOne(requestUserDto);
	// }

	public async logout() {
		return '';
	}

	public async findOne(id: number) {
		console.log(`#${id} awsResource`);
		return "1";
	}

	public async update(id: number, requestUserDto: RequestUserDto) {
		return this.usersRepository.findOne();
	}

	public async remove(id: number) {
		console.log('(==============)')
		console.log(id);
		console.log('(==============)')
		return this.usersRepository.find();
	}
}
