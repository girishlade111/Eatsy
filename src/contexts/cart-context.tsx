'use client';

import { useToast } from '@/hooks/use-toast';
import type { CartItem, MenuItem } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, restaurantInfo: { id: string, name: string }) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: MenuItem, restaurantInfo: { id: string, name: string }) => {
    setCartItems((prevItems) => {
      // Check if any item in the cart is from a different restaurant
      if (prevItems.length > 0 && prevItems[0].restaurantId !== restaurantInfo.id) {
        toast({
          variant: "destructive",
          title: "Cannot add item from different restaurant",
          description: "Please clear your cart before ordering from a new restaurant.",
        });
        return prevItems;
      }
      
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, restaurantId: restaurantInfo.id, restaurantName: restaurantInfo.name }];
      }
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    toast({
        title: "Item removed",
        description: `Item has been removed from your cart.`,
    })
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
