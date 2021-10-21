import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { User } from '../auth/entity/user.entity';

import { userInfoData } from './interface/user-info.interface';
import { UserService } from './service/user.service';
import { UserInfoDto } from './dto/user-info.dto';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUserInfo(@GetUser() user: User): Promise<userInfoData> {
    return this.userService.getUser(user);
  }

  @Patch()
  @ApiConsumes('multipart/form-data')
  updateUserInfo(
    @Body() userInfoDto: UserInfoDto,
    @GetUser() user: User,
  ): Promise<userInfoData> {
    return this.userService.updateUserProfile(user, userInfoDto);
  }
}
