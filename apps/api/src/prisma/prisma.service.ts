import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Product, Category } from '@prisma/client';

@Injectable()
export class PrismaService {
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

  async createProduct(name: string, description: string, price: number, categoryId: number): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
      },
    });
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async updateProduct(id: number, data: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async createCategory(name: string): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name,
      },
    });
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async updateCategory(id: number, name: string): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
