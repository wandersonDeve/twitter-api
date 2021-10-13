import { Controller, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFollowDto } from './follow.dto';
import { FollowsService } from './follow.service';
import { Follow } from '.prisma/client';

@UseGuards(AuthGuard('jwt'))
@Controller('follow')
export class FollowsController {
  constructor(private db: FollowsService) {}

  @Post('/:id')
  create(
    @Body() data: CreateFollowDto,
    @Param('id') id: number,
  ): Promise<Follow> {
    return this.db.follow(data, id);
  }
}
