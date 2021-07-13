import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";

@Entity('photo')
export class Photo {
	@ApiProperty({
		example: '1',
		description: 'Primary key, Generated',
		required: true,
	})
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty({
		example: '사진1',
		description: '사진 이름(not null)',
		required: true,
	})
	@Column({ length: 500 })
	name: string;

	@ApiProperty({
		example: '거리에서',
		description: '사진 설명',
	})
	@Column('text')
	description: string;

	@ApiProperty({
		example: '사진1.jpg',
		description: '사진 파일명(not null)',
		required: true,
	})
	@Column()
	filename: string;

	@ApiProperty({
		example: '20',
		description: '조회 수(default: 0)',
		default: 0,
		required: true,
	})
	@Column('int')
	views: number;

	@ApiProperty({
		example: true,
		description: '게시 여부(default: true)',
		default: true,
		required: true,
	})
	@Column()
	isPublished: boolean;


}