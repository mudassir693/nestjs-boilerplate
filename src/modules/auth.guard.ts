import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _reflector: Reflector) {}

    canActivate(
        context: ExecutionContext,
      ): boolean | Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const isAuthorized = this._reflector.get<string[]>('authorized',context.getHandler())
        console.log(isAuthorized)
        if(isAuthorized){
          throw new BadRequestException()
        }
        return true
      }

}