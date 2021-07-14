import { ApiProperty } from '@nestjs/swagger';

export class ResponseAwsBillingDto {
	@ApiProperty({
		example: 1,
		description: 'AWS-Billing pk',
		required: true,
	})
	readonly id: number;

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

	@ApiProperty({
		example: '$375000',
		description: '사용 요금',
		required: true,
	})
	readonly cost: string;
}
