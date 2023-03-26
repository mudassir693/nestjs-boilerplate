import { Injectable, Logger } from "@nestjs/common";
import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    MessageBody,
    ConnectedSocket,
    WebSocketServer
  } from "@nestjs/websockets";

import { Namespace, Socket } from "socket.io";
import { SocketService } from "src/modules/socket/socket.service";

@WebSocketGateway({namespace:'user'})
export class UserGateway extends SocketService{
    public logger = new Logger("UserGateway")

    @WebSocketServer() io: Namespace;

    @SubscribeMessage('user')
    handleUser(@ConnectedSocket() client: Socket, @MessageBody() body: any): string{
        console.log(body)
        return "Success"
    }
}