import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthGuard } from '@/guards/auth.guard';
import { UserPayload } from '@/vo/user.payload';

import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => UserPayload, { description: '로그인' })
  async signIn(@Args({ name: 'email', type: () => String }) email: string) {
    return await this.authService.changeSignInStatus(email, true);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UserPayload, { description: '로그아웃' })
  async signOut(@Args({ name: 'email', type: () => String }) email: string) {
    return await this.authService.changeSignInStatus(email, false);
  }
}
