import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestPhotoDto } from './dto/request-photo.dto';
import { ResponsePhotoDto } from './dto/response-photo.dto';
import { Photo } from './entity/photo.entity';

@Injectable()
export class PhotoService {
	constructor(
		@Inject('PHOTO_REPOSITORY')
		private photoRepository: Repository<Photo>,
	) { }

	async create(): Promise<ResponsePhotoDto> {
		throw new Error('Method not implemented.');
	}

	async findAll(): Promise<ResponsePhotoDto[]> {
		return this.photoRepository.find();
	}

	async findOne(id: number): Promise<ResponsePhotoDto> {
		return this.photoRepository.findOne(id);
	}

	async update(id: number, requestPhotoDto: RequestPhotoDto): Promise<ResponsePhotoDto> {
		return this.photoRepository.findOne();
	}

	async remove(id: number,): Promise<ResponsePhotoDto> {
		return this.photoRepository.findOne();
	}
}