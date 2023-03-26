import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/app/user/user.module';
import { AuthGuard } from './modules/auth.guard';
import { SocketModule } from './modules/socket/socket.module';

@Module({
  imports: [
    SocketModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
},],
})
export class AppModule {}
