import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      msg:"server runs sucessfully"
    };
  }
}
