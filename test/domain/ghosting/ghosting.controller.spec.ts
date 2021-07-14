import { Test, TestingModule } from '@nestjs/testing';
import { GhostingController } from 'src/domain/ghosting/ghosting.controller';
import { GhostingService } from 'src/domain/ghosting/ghosting.service';

describe('GhostingController', () => {
	let controller: GhostingController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [GhostingController],
			providers: [GhostingService],
		}).compile();

		controller = module.get<GhostingController>(GhostingController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
