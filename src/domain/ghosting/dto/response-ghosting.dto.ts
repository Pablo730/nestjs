import { ApiProperty } from '@nestjs/swagger';

export class ResponseGhostingDto {
	@ApiProperty({
		example: 1,
		description: 'G호스팅 pk',
		required: true,
	})
	id: number;

	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	userId: string;

	@ApiProperty({
		example: 'Pablo',
		description: 'G호스팅 서비스 이름',
		required: true,
	})
	serviceName: string;

	@ApiProperty({
		example: '해지',
		description: 'G호스팅 서비스 상태',
		required: true,
	})
	status: string;

	@ApiProperty({
		example: '2021/07/15',
		description: 'G호스팅 서비스 등록 날짜',
		required: true,
	})
	createdAt: Date;

	@ApiProperty({
		example: '2021/07/16',
		description: 'G호스팅 서비스 업데이트 날짜',
		required: true,
	})
	updatedAt: Date;
}
