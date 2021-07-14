import { ApiProperty } from '@nestjs/swagger';

export class RequestAwsBillingDto {
	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	readonly userId: string;

	@ApiProperty({
		example: '21년 7월',
		description: '월별 청구',
		required: true,
	})
	readonly month: string;
}
