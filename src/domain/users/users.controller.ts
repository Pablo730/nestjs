import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { undefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { Users } from './entities/user.entity';

@ApiTags('USERS API')
@UseInterceptors(undefinedToNullInterceptor)
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@ApiOperation({ summary: '회원가입' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'already registered users.' }
			}
		}
	})
	@Post()
	async join(@Body() requestUserDto: RequestUserDto) {
		return this.usersService.join(requestUserDto);
	}

	@ApiOperation({ summary: '로그인' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'password Inconsistency.' }
			}
		}
	})
	@Post('login')
	async login(@Body() requestUserDto: RequestUserDto) {
		return this.usersService.login(requestUserDto);
	}


	@ApiOperation({ summary: '로그아웃' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' }
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'already logout.' }
			}
		}
	})
	@Post('logout')
	async logout() {
		return this.usersService.logout();
	}

	@ApiOperation({ summary: '내 정보 가져오기' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'non-existent user.' }
			}
		}
	})
	@Get(':id')
	async findOne(@Param('id') id: string) {
		return this.usersService.findOne(+id);
	}

	@ApiOperation({ summary: '내 정보 업데이트' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'non-existent user.' }
			}
		}
	})
	@Patch(':id')
	async update(@Param('id') id: string, @Body() requestUserDto: RequestUserDto) {
		return this.usersService.update(+id, requestUserDto);
	}

	@ApiOperation({ summary: '탈퇴 요청' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: { properties: { code: { default: 'SUCCESS' } } }
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				code: { default: 'FAIL' },
				message: { example: 'already resigned user.' }
			}
		}
	})
	@Delete(':id')
	async remove(@Param('id') id: string) {
		return this.usersService.remove(+id);
	}
}
