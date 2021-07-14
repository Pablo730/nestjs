import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AwsBillingService } from './aws-billing.service';
import { RequestAwsBillingDto } from './dto/request-aws-billing.dto';

@ApiTags('AWS-Billing API')
@Controller('aws-billing')
export class AwsBillingController {
	constructor(private readonly awsBillingService: AwsBillingService) { }

	@Post()
	create(@Body() requestAwsBillingDto: RequestAwsBillingDto) {
		return this.awsBillingService.create(requestAwsBillingDto);
	}

	@Get()
	findAll() {
		return this.awsBillingService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.awsBillingService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() requestAwsBillingDto: RequestAwsBillingDto,
	) {
		return this.awsBillingService.update(+id, requestAwsBillingDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.awsBillingService.remove(+id);
	}
}
