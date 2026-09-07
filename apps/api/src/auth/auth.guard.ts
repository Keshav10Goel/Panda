import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { SessionService } from './session.service.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly sessionService: SessionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: unknown }>();

    const token = request.cookies?.panda_session;

    if (!token) {
      throw new UnauthorizedException('Authentication required');
    }

    const user = await this.sessionService.getUserByToken(token);

    if (!user || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Authentication required');
    }

    request.user = user;

    return true;
  }
}