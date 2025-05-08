import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async createCart(userId: number) {
    return this.prisma.cart.create({
      data: {
        userId,
      },
    });
  }

  async getCartById(cartId: number) {
    return this.prisma.cart.findUnique({
      where: { id: cartId },
      include: { items: true },
    });
  }

  async addItemToCart(cartId: number, productId: number, quantity: number) {
    return this.prisma.cartItem.create({
      data: {
        cartId,
        productId,
        quantity,
      },
    });
  }

  async removeItemFromCart(cartItemId: number) {
    return this.prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  }

  async updateItemQuantity(cartItemId: number, quantity: number) {
    return this.prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
    });
  }

  async mergeCarts(guestCartId: number, userCartId: number) {
    const guestCartItems = await this.prisma.cartItem.findMany({
      where: { cartId: guestCartId },
    });

    for (const item of guestCartItems) {
      await this.prisma.cartItem.create({
        data: {
          cartId: userCartId,
          productId: item.productId,
          quantity: item.quantity,
        },
      });
    }

    await this.prisma.cart.delete({
      where: { id: guestCartId },
    });
  }
}
