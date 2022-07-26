import { Controller, Get, Logger } from '@nestjs/common';
import { CoreService } from 'src/Core/service';
import { UserService } from './service';

@Controller('user')
export class UserController {
  // 日志
  private readonly logger;
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
  ) {
    this.logger = new Logger('User-Log');
  }
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Get('cores')
  getCores() {
    this.logger.log('你好啊'); //  LOG [User-Log] 你好啊
    Logger.log('你好啊'); // LOG 你好啊

    return this.coreService.getAllCore();
  }
}
