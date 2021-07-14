import { Injectable } from '@nestjs/common';
import { RequestAwsBillingDto } from './dto/request-aws-billing.dto';


@Injectable()
export class AwsBillingService {
	create(requestAwsBillingDto: RequestAwsBillingDto) {
		return 'This action adds a new awsBilling';
	}

	findAll() {
		return `This action returns all awsBilling`;
	}

	findOne(id: number) {
		return `This action returns a #${id} awsBilling`;
	}

	update(id: number, requestAwsBillingDto: RequestAwsBillingDto) {
		return `This action updates a #${id} awsBilling`;
	}

	remove(id: number) {
		return `This action removes a #${id} awsBilling`;
	}
}
