import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }
      const header = req.headers.authorization;
      const bearer = header.split(' ')[0];
      const token = header.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User is unauthorized!' });
      }

      const user = this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      });

      if (!user) {
        throw new UnauthorizedException({ message: 'User is unauthorized!' });
      }
      req.user = user;

      return requiredRoles.some((role) => user.role?.includes(role)); //Boolean(user.role === requiredRoles);
    } catch (e) {
      throw new HttpException('An access is forbidden 2', HttpStatus.FORBIDDEN);
    }
  }
}
