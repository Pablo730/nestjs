import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class ResponseUserDto {
	@ApiProperty({
		example: 'Pablo',
		description: '유저 ID',
		required: true,
	})
	public userId: string;

	@ApiProperty({
		example: '김창민',
		description: '유저 이름',
		required: true,
	})
	public userName: string;

	@ApiProperty({
		example: 'kcm@gabia.com',
		description: '유저 메일',
		required: true,
	})
	public eamil: string;

	@ApiProperty({
		example: true,
		description: '탈퇴 여부',
		required: true,
	})
	public isActive: boolean;

	@ApiProperty({
		example: '2021/07/15',
		description: '유저 생성 날짜',
		required: true,
	})
	public createdAt: Date;

	@ApiProperty({
		example: '2021/07/16',
		description: '유저 정보 업데이트 날짜',
		required: true,
	})
	public updatedAt: Date;
}
