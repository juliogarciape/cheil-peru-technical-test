import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto, signUpDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  @Post('signin')
  signIn(@Body() data: signInDto) {
    return this.authService.signIn(data);
  }

  @Post('signup')
  signUp(@Body() data: signUpDto) {
    return this.authService.signUp(data);
  }
}
