import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import firebase from 'firebase-admin';
import { Repository } from 'typeorm';

import { User } from '@/entities/user.entity';
import { FirebaseService } from '@/modules/firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);
  private readonly auth: firebase.auth.Auth;

  constructor(private readonly firebaseService: FirebaseService, @InjectRepository(User) private userRepository: Repository<User>) {
    this.auth = firebaseService.getAuth();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const [, { email: email1 }, request] = context.getArgs();
      if (!request.req.headers.authorization) {
        throw new Error('EMPTY_AUTHORIZATION');
      }
      const { email: email2 } = await this.auth.verifyIdToken(request.req.headers.authorization.replace('Bearer ', ''));
      const [user1, user2] = await Promise.all([await this.userRepository.findOneBy({ email: email1 }), await this.userRepository.findOneBy({ email: email2 })]);
      if (!user1 || !user2) {
        throw new Error('NOT_ADMIN');
      }
      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.message === 'EMPTY_AUTHORIZATION') {
        throw new ForbiddenException('토큰이 필요합니다.');
      } else if (error.message.startsWith('Decoding Firebase ID token failed.')) {
        throw new ForbiddenException('토큰이 올바른 형식이 아닙니다.');
      } else if (error.message === 'NOT_ADMIN') {
        throw new UnauthorizedException('관리자가 아닙니다.');
      } else {
        throw new ForbiddenException('토큰이 만료되었습니다.');
      }
    }
  }
}
