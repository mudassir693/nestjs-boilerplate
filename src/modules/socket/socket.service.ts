import { Injectable, Logger } from "@nestjs/common";
import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    MessageBody,
    ConnectedSocket,
    WebSocketServer,
    OnGatewayConnection,
    WsException
  } from "@nestjs/websockets";

import { Namespace, Socket } from "socket.io";

@WebSocketGateway({namespace:"messages"})
export class SocketService implements OnGatewayInit, OnGatewayConnection {
    
    public logger: Logger = new Logger("AppGateway");

    @WebSocketServer() io: Namespace;
    
    afterInit (server: any) {
        // throw new Error('Method not implemented.'); - comment this
        this.logger.log("Initialized");
    }

    handleConnection(client: Socket){
        this.io.emit("joined",`joined by clientId: ${client.id}`)
    }

    @SubscribeMessage("message")
    handleMessage (@ConnectedSocket() client: Socket, @MessageBody() data: any) {

        console.log(client.id)
        const body = {
            message:data.message
        }

        this.io.to(data?.senderId).emit("message-to", body )
        // return "Hello world!";
    }
}