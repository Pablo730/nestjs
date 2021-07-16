import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AwsResourceService } from './aws-resource.service';
import { RequestAwsResourceDto } from './dto/request-aws-resource.dto';

@ApiTags('AWS-Resource API')
@Controller('aws-resource')
export class AwsResourceController {
	constructor(private readonly awsResourceService: AwsResourceService) { }

	@ApiOperation({ summary: 'AWS 사용량 생성' })
	@Post()
	create(@Body() requestAwsResourceDto: RequestAwsResourceDto) {
		return this.awsResourceService.create(requestAwsResourceDto);
	}

	@ApiOperation({ summary: '해당 월 모든 유저 AWS 사용량 보기' })
	@Get()
	findAll() {
		return this.awsResourceService.findAll();
	}

	@ApiOperation({ summary: '유저가 AWS 사용량 보기' })
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.awsResourceService.findOne(+id);
	}
}
