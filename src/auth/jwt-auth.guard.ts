import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const header = req.headers.authorization;
      const bearer = header.split(' ')[0];
      const accessToken = header.split(' ')[1];

      if (bearer !== 'Bearer' || !accessToken) {
        throw new UnauthorizedException({ message: 'User is unauthorized!' });
      }

      const user = this.jwtService.verify(accessToken, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      });

      if (!user) {
        throw new UnauthorizedException({ message: 'User is unauthorized!' });
      }

      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException({ message: 'User is unauthorized!' });
    }
  }
}
