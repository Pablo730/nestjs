import { Test, TestingModule } from '@nestjs/testing';
import { AwsResourceController } from 'src/domain/aws-resource/aws-resource.controller';
import { AwsResourceService } from 'src/domain/aws-resource/aws-resource.service';

describe('AwsResourceController', () => {
	let controller: AwsResourceController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AwsResourceController],
			providers: [AwsResourceService],
		}).compile();

		controller = module.get<AwsResourceController>(AwsResourceController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
