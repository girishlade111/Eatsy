'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from './ui/button';
import { PlusCircle } from 'lucide-react';
import type { MenuItem } from '@/lib/types';
import { useCart } from '@/contexts/cart-context';

interface MenuItemCardProps {
  item: MenuItem;
  restaurant: {
    id: string;
    name: string;
  }
}

export default function MenuItemCard({ item, restaurant }: MenuItemCardProps) {
    const { addToCart } = useCart();
    
    const handleAddToCart = () => {
        addToCart(item, restaurant);
    }
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row gap-4 items-start p-4">
        <div className="flex-1">
            <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
            <CardDescription className="mt-1 text-sm">{item.description}</CardDescription>
        </div>
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md object-cover"
          data-ai-hint="food item"
        />
      </CardHeader>
      <CardFooter className="flex justify-between items-center p-4 pt-0 mt-auto">
        <p className="font-semibold text-lg">${item.price.toFixed(2)}</p>
        <Button size="sm" onClick={handleAddToCart}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
