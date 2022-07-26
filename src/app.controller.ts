import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreService } from './Core/service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cores')
  getCore(): string {
    return this.coreService.getCore();
  }
}
