import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestGhostingDto } from './dto/request-ghosting.dto';
import { Ghosting } from './entities/ghosting.entity';

@Injectable()
export class GhostingService {
	constructor(

	) { }


	create(requestGhostingDto: RequestGhostingDto) {
		return 'This action adds a new ghosting';
	}

	findAll() {
		return `This action returns all ghosting`;
	}

	update(id: number, requestGhostingDto: RequestGhostingDto) {
		return `This action updates a #${id} ghosting`;
	}

	remove(id: number) {
		return `This action removes a #${id} ghosting`;
	}
}
