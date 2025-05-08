export function calculateCartTotal(cartItems: { price: number; quantity: number }[]): number {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function findCartItem(cartItems: { id: number }[], itemId: number) {
  return cartItems.find(item => item.id === itemId);
}

export function updateCartItemQuantity(cartItems: { id: number; quantity: number }[], itemId: number, quantity: number) {
  const item = findCartItem(cartItems, itemId);
  if (item) {
    item.quantity = quantity;
  }
  return cartItems;
}

export function removeCartItem(cartItems: { id: number }[], itemId: number) {
  return cartItems.filter(item => item.id !== itemId);
}

export function mergeCarts(guestCartItems: { id: number; productId: number; quantity: number }[], userCartItems: { id: number; productId: number; quantity: number }[]) {
  const mergedCartItems = [...userCartItems];

  guestCartItems.forEach(guestItem => {
    const userItem = mergedCartItems.find(item => item.productId === guestItem.productId);
    if (userItem) {
      userItem.quantity += guestItem.quantity;
    } else {
      mergedCartItems.push(guestItem);
    }
  });

  return mergedCartItems;
}
