import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':username')
  findUnique(@Param('username') username: string): Promise<User> {
    return this.service.findUnique(username);
  }

  @Post('/create_account')
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update/:username')
  async update(
    @Param('username') username: string,
    @Body() updateData: CreateUserDto,
  ): Promise<User> {
    return this.service.update(username, updateData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete/:id')
  deleteOne(@Param('id') id: number): Promise<User> {
    return this.service.deleteOne(id);
  }
}
