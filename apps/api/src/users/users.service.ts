import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Profile, Address } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AddAddressDto } from './dto/add-address.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(email: string, password: string, name: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async updateUserProfile(userId: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data: updateProfileDto,
    });
  }

  async addUserAddress(userId: number, addAddressDto: AddAddressDto): Promise<Address> {
    return this.prisma.address.create({
      data: {
        ...addAddressDto,
        userId,
      },
    });
  }

  async resetUserPassword(userId: number, resetPasswordDto: ResetPasswordDto): Promise<User> {
    const hashedPassword = await argon2.hash(resetPasswordDto.newPassword);
    return this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
  }
}
