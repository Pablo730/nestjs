import { Test, TestingModule } from '@nestjs/testing';
import { AwsBillingController } from 'src/domain/aws-billing/aws-billing.controller';
import { AwsBillingService } from 'src/domain/aws-billing/aws-billing.service';

describe('AwsBillingController', () => {
	let controller: AwsBillingController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AwsBillingController],
			providers: [AwsBillingService],
		}).compile();

		controller = module.get<AwsBillingController>(AwsBillingController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
