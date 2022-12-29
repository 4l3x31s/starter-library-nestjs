import { Injectable } from '@nestjs/common';
import moment from 'moment';
@Injectable()
export class AppService {
  getHello(): string {

    return moment().format('DD-MM-YYYY HH:mm:ss').toString();
  }
}
