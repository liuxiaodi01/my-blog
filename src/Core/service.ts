import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore() {
    return 'get Core';
  }
  getAllCore() {
    return 'get All Cores';
  }
}
