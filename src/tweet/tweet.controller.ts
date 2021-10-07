import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Put,
} from '@nestjs/common';
import { Tweet } from '.prisma/client';
import { CreateTweetDto } from './tweet.dto';
import { TweetsService } from './tweet.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(private service: TweetsService) {}

  @Get(':id')
  findUnique(@Param('id') id: number): Promise<Tweet> {
    return this.service.findUnique(id);
  }

  @Post()
  create(@Body() data: CreateTweetDto): Promise<Tweet> {
    return this.service.create(data);
  }

  @Put(':id/curtir')
  update(@Param('id') id: number): Promise<Tweet> {
    return this.service.update(id);
  }
}
