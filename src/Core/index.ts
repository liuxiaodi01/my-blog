import { Module, Global } from '@nestjs/common';
import { CoreService } from './service';
/* Global 交叉线 多个Module都可以使用 无需到Module定义 */
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
