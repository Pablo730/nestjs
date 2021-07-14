import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto {
	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	readonly userId: string;

	@ApiProperty({
		example: '김창민',
		description: '유저 이름',
		required: true,
	})
	readonly userName: string;

	@ApiProperty({
		example: 'kcm@gabia.com',
		description: '유저 메일',
		required: true,
	})
	readonly eamil: string;

	@ApiProperty({
		example: true,
		description: '탈퇴 여부',
		required: true,
	})
	readonly isActive: boolean;
}
