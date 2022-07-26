import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './Core';
import { CoreService } from './Core/service';
import { UserModule } from './User';

@Module({
  imports: [UserModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, CoreService],
})
export class AppModule {}
