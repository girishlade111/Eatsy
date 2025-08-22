'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import Image from 'next/image';
import Link from 'next/link';

export function CartSheet() {
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart } =
    useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge
              variant="default"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0 bg-primary text-primary-foreground"
            >
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        {cartCount > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-4 gap-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                      data-ai-hint="food item"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <p className="font-semibold">
                         ${(item.price * item.quantity).toFixed(2)}
                       </p>
                       <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <SheetClose asChild>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">
              Add some delicious food to get started!
            </p>
            <SheetClose asChild>
                <Button asChild className="mt-6">
                    <Link href="/restaurants">Browse Restaurants</Link>
                </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
