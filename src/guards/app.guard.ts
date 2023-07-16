import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import firebase from 'firebase-admin';
import { Repository } from 'typeorm';

import { User } from '@/entities/user.entity';
import { FirebaseService } from '@/modules/firebase/firebase.service';

@Injectable()
export class AppGuard implements CanActivate {
  private readonly logger = new Logger(AppGuard.name);
  private readonly auth: firebase.auth.Auth;

  constructor(private readonly firebaseService: FirebaseService, @InjectRepository(User) private userRepository: Repository<User>) {
    this.auth = firebaseService.getAuth();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const [, , request] = context.getArgs();
      if (!request.req.headers.authorization) {
        throw new Error('EMPTY_AUTHORIZATION');
      }
      const { email } = await this.auth.verifyIdToken(request.req.headers.authorization.replace('Bearer ', ''));
      const user = await this.userRepository.findOneBy({ email });
      if (!user) {
        throw new Error('NOT_ADMIN');
      }
      if (!user.isLogged) {
        throw new Error('NOT_SIGNED_IN');
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
      } else if (error.message === 'NOT_SIGNED_IN') {
        throw new UnauthorizedException('로그인 후 이용해주세요.');
      } else {
        throw new ForbiddenException('토큰이 만료되었습니다.');
      }
    }
  }
}
