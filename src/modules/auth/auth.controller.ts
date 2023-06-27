import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}