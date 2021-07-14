import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AwsResourceService } from './aws-resource.service';
import { CreateAwsResourceDto } from './dto/create-aws-resource.dto';
import { UpdateAwsResourceDto } from './dto/update-aws-resource.dto';

@ApiTags('AWS-Resource API')
@Controller('aws-resource')
export class AwsResourceController {
	constructor(private readonly awsResourceService: AwsResourceService) { }

	@Post()
	create(@Body() createAwsResourceDto: CreateAwsResourceDto) {
		return this.awsResourceService.create(createAwsResourceDto);
	}

	@Get()
	findAll() {
		return this.awsResourceService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.awsResourceService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateAwsResourceDto: UpdateAwsResourceDto,
	) {
		return this.awsResourceService.update(+id, updateAwsResourceDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.awsResourceService.remove(+id);
	}
}
