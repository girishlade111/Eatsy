'use client';

import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount } = useCart();
  const deliveryFee = cartTotal > 0 ? 5.00 : 0;
  const totalAmount = cartTotal + deliveryFee;

  if (cartCount === 0) {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center h-[60vh]">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold font-headline">Your Cart is Empty</h1>
            <p className="text-muted-foreground mt-2 max-w-md">
                You haven't added any items to your cart yet. Start browsing our delicious options to place an order.
            </p>
            <Button asChild className="mt-8">
                <Link href="/restaurants">Start Ordering</Link>
            </Button>
        </div>
    )
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(123) 456-7890" />
                    </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Anytown" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="CA" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input id="zip" placeholder="12345" />
                  </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="instructions">Delivery Instructions</Label>
                    <Textarea id="instructions" placeholder="Leave at the front door..." />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                You are ordering from {cartItems[0]?.restaurantName}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className='flex items-center gap-3'>
                    <Image src={item.imageUrl} alt={item.name} width={48} height={48} className='rounded-md' data-ai-hint="food item" />
                    <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Delivery Fee</p>
                  <p>${deliveryFee.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
                 <Button size="lg" className="w-full">Place Order</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
