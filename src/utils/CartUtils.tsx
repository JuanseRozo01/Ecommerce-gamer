import { product } from "./Types";

export const addItemsToCart = (cartItems: product[], productToAdd: product): product[] => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  export const removeItemFromCart = (cartItems: product[], id: number): product[] => {
    const itemToRemove = cartItems.find(item => item.id === id);
  
    if (!itemToRemove) {
      return cartItems; // Si no se encuentra el producto, se retorna el carrito original
    }
  
    if (itemToRemove.quantity && itemToRemove.quantity > 1) {
      return cartItems.map(item =>
        item.id === itemToRemove.id
          ? { ...item, quantity: item.quantity! - 1 }
          : item
      );
    }
  
    return cartItems.filter(item => item.id !== itemToRemove.id);
  };

  export const resetShippingCost = (cartItems: product[], shippingCost:number) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
        return 0;
    }
  
    return shippingCost;
};


// export const addItemsToCart = (product: product, cartItems: product[] ): product[] => {

//     const productInCart = cartItems.find((item) => item.id === product.id);

//     if (productInCart) {
//       return cartItems.map((item) =>
//         item.id === productInCart.id
//           ? { ...item, quantity: (item.quantity || 0) + 1 }
//           : item
//       );
//     }
  
//     return [
//       ...cartItems,
//       {
//         ...product,
//         quantity: 1,
//       },
//     ];


// }