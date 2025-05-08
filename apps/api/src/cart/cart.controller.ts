import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(@Body('userId') userId: number) {
    return this.cartService.createCart(userId);
  }

  @Get(':id')
  async getCartById(@Param('id') id: number) {
    return this.cartService.getCartById(id);
  }

  @Post(':id/items')
  async addItemToCart(
    @Param('id') cartId: number,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.addItemToCart(cartId, productId, quantity);
  }

  @Delete('items/:itemId')
  async removeItemFromCart(@Param('itemId') cartItemId: number) {
    return this.cartService.removeItemFromCart(cartItemId);
  }

  @Post('items/:itemId/quantity')
  async updateItemQuantity(
    @Param('itemId') cartItemId: number,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.updateItemQuantity(cartItemId, quantity);
  }

  @Post('merge')
  async mergeCarts(
    @Body('guestCartId') guestCartId: number,
    @Body('userCartId') userCartId: number,
  ) {
    return this.cartService.mergeCarts(guestCartId, userCartId);
  }
}
