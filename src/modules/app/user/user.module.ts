import { Module } from "@nestjs/common/decorators";
import { SocketModule } from "src/modules/socket/socket.module";
import { UserController } from "./user.controller";
import { UserGateway } from "./user.gateway";
import { UserService } from "./user.service";

@Module({
    imports: [SocketModule],
    providers:[UserService, UserGateway],
    controllers:[UserController]
})
export class UserModule {

}