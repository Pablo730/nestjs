import { Body, Controller, Delete, Get, Param, Patch, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiResponseProperty, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger';
import { undefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { PhotoService } from './photo.service';
import { ResponsePhotoDto } from 'src/domain/photo/dto/response-photo.dto';

@ApiTags('Photo API')
@UseInterceptors(undefinedToNullInterceptor)
@Controller('photo')
export class PhotoController {
	constructor(private readonly photoService: PhotoService) { }

	@ApiOperation({ summary: 'View all photos' })
	@ApiOkResponse({
		description: "SUCCESS",
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				//data: { $ref: getSchemaPath(ResponsePhotoDto) }
			}
		}
	})
	@ApiUnauthorizedResponse({
		description: 'FAIL(No permission)',
		schema: {
			properties: { code: { default: 'FAIL' } }
		}
	})
	@Get()
	findAll(): Promise<ResponsePhotoDto[]> {
		return this.photoService.findAll();
	}

	@ApiOperation({ summary: 'Find by photo id' })
	@ApiOkResponse({
		description: 'SUCCESS',
		schema: {
			properties: {
				code: { default: 'SUCCESS' },
				//data: { $ref: getSchemaPath(ResponsePhotoDto) }
			}
		}
	})
	@ApiBadRequestResponse({
		description: 'FAIL(bad request)',
		schema: {
			properties: { code: { default: 'FAIL' } }
		}
	})
	@ApiParam({
		name: 'id',
		example: 1,
		required: true,
	})
	@Get(':id')
	findOne(@Param('id') id: number): Promise<ResponsePhotoDto> {
		return this.photoService.findOne(id);
	}

	@ApiOperation({ summary: 'update by photo id' })
	@ApiParam({
		name: 'id',
		example: 1,
		required: true,
	})
	@Patch(':id')
	update(@Param('id') id: number, @Body() responsePhotoDto: ResponsePhotoDto) {
		return this.photoService.update(id, responsePhotoDto);
	}

	@ApiOperation({ summary: 'remove by photo id' })
	@ApiParam({
		name: 'id',
		example: 1,
		required: true,
	})
	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.photoService.remove(id);
	}
}
