import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation, ApiResponseProperty, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { undefinedToNullInterceptor } from 'src/core/interceptors/undefinedToNull.interceptor';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { UsersService } from './user.service';

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
				statusCode: { default: 'SUCCESS' },
				data: { example: ResponseUserDto },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				statusCode: { default: '400' },
				message: { example: 'already registered users.' }
			}
		}
	})
	@ApiResponseProperty({ type: ResponseUserDto })
	@Post()
	join(@Body() requestUserDto: RequestUserDto) {
		return this.usersService.join(requestUserDto);
	}

	// @ApiOperation({ summary: '로그인' })
	// @ApiCreatedResponse({
	// 	description: 'SUCCESS',
	// 	schema: {
	// 		properties: {
	// 			statusCode: { default: 'SUCCESS' },
	// 			data: { $ref: getSchemaPath(ResponseUserDto) },
	// 		}
	// 	}
	// })
	// @ApiBadRequestResponse({
	// 	description: 'FAIL',
	// 	schema: {
	// 		properties: {
	// 			statusCode: { default: '400' },
	// 			message: { example: 'password Inconsistency.' }
	// 		}
	// 	}
	// })
	// @Post('login')
	// async login(@Body() requestUserDto: RequestUserDto) {
	// 	return this.usersService.login(requestUserDto);
	// }


	@ApiOperation({ summary: '로그아웃' })
	@ApiCreatedResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				statusCode: { default: 'SUCCESS' }
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				statusCode: { default: '400' },
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
				statusCode: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				statusCode: { default: '400' },
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
				statusCode: { default: 'SUCCESS' },
				data: { $ref: getSchemaPath(ResponseUserDto) },
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				statusCode: { default: '400' },
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
		schema: { properties: { statusCode: { default: 'SUCCESS' } } }
	})
	@ApiBadRequestResponse({
		description: 'FAIL',
		schema: {
			properties: {
				statusCode: { default: '400' },
				message: { example: 'already resigned user.' }
			}
		}
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		console.log(id);
		return this.usersService.remove(Number(id));
	}
}