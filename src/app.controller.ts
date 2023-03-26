import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import AuthorizedGuard from './modules/Authorized.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AuthorizedGuard()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
