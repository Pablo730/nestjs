import { ApiProperty } from '@nestjs/swagger';

export class RequestGhostingDto {
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
}
