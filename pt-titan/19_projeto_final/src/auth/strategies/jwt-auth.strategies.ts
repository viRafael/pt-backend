import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { env } from 'src/common/env-validator';

type JwtPayload = {
  user: {
    sub: string;
    email: string;
    name: string;
  };
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    if (!env.JWT_SECRET) {
      throw new Error('A variavel de ambiente JWT_SECRET não está definida');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.JWT_SECRET,
    });
  }

  validate(payload: JwtPayload) {
    return {
      sub: payload.user.sub,
      email: payload.user.email,
      name: payload.user.name,
    };
  }
}
