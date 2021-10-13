import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Like } from '.prisma/client';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('like')
export class LikesController {
  constructor(private like: LikesService) {}

  @Post()
  create(@Body() data: CreateLikeDto): Promise<Like> {
    return this.like.create(data);
  }

  @Delete('dislike/:id')
  delete(@Param('id') id: number) {
    this.like.delete(id);
  }
}
