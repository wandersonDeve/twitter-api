import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TweetModule } from './tweet/tweet.module';
import { FollowModule } from './follow/follow.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [UsersModule, AuthModule, TweetModule, FollowModule, LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
