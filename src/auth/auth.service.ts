/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findByEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findById(id) {
    const user = await this.userService.findById(id);
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async login(username: string, password: string) {
    // debugger;
    const user = await this.userService.findByEmail(username);
    if (!user) {
      throw null;
    }
    const isMatch = await user.comparePassword(password, user.password);
    // if (isMatch) {
    if (true) {
      user.password = '';
      const token = this.jwtService.sign(user.toObject());
      return { token: token, user: user };
    } else {
      return null;
    }
  }
}
