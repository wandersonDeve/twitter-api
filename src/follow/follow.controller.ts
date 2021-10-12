import {
  Body,
  Controller,
  Get,
  Param,
  UseGuards,
  Post,
  Delete,
} from '@nestjs/common';
import { Follow } from '.prisma/client';
import { CreateFollowDto } from './follow.dto';
import { FollowService } from './follow.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('follows')
export class FollowsController {
  constructor(private service: FollowService) {}

  @Get(':id')
  findUnique(@Param('id') id: number): Promise<Follow> {
    return this.service.findUnique(id);
  }

  @Post()
  create(@Body() data: CreateFollowDto): Promise<Follow> {
    return this.service.create(data);
  }
}
