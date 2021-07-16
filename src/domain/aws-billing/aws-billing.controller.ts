import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AwsBillingService } from './aws-billing.service';
import { RequestAwsBillingDto } from './dto/request-aws-billing.dto';

@ApiTags('AWS-Billing API')
@Controller('aws-billing')
export class AwsBillingController {
	constructor(private readonly awsBillingService: AwsBillingService) { }

	@ApiOperation({ summary: '해당 월 AWS 청구서 생성' })
	@Post()
	create(@Body() requestAwsBillingDto: RequestAwsBillingDto) {
		return this.awsBillingService.create(requestAwsBillingDto);
	}

	@ApiOperation({ summary: '해당 월 AWS 청구서 전체 조회' })
	@Get()
	findAll() {
		return this.awsBillingService.findAll();
	}
}
