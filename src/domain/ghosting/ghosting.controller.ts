import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestGhostingDto } from './dto/request-ghosting.dto';
import { GhostingService } from './ghosting.service';

@ApiTags('Ghosing API')
@Controller('ghosting')
export class GhostingController {
	constructor(private readonly ghostingService: GhostingService) { }

	@Post()
	create(@Body() requestGhostingDto: RequestGhostingDto) {
		return this.ghostingService.create(requestGhostingDto);
	}

	@Get()
	findAll() {
		return this.ghostingService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.ghostingService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() requestGhostingDto: RequestGhostingDto) {
		return this.ghostingService.update(+id, requestGhostingDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.ghostingService.remove(+id);
	}
}
