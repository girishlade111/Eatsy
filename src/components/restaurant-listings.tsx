'use client';

import { useState, useMemo } from 'react';
import type { Restaurant } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface RestaurantListingsProps {
  allRestaurants: Restaurant[];
}

export default function RestaurantListings({
  allRestaurants,
}: RestaurantListingsProps) {
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const uniqueCuisines = [
    'all',
    ...Array.from(new Set(allRestaurants.map((r) => r.cuisine))),
  ];

  const filteredRestaurants = useMemo(() => {
    return allRestaurants.filter((r) => {
      if (cuisineFilter !== 'all' && r.cuisine !== cuisineFilter) return false;
      if (ratingFilter !== 'all' && r.rating < parseFloat(ratingFilter))
        return false;
      if (
        deliveryTimeFilter !== 'all' &&
        r.deliveryTime > parseInt(deliveryTimeFilter)
      )
        return false;
      if (priceFilter !== 'all' && r.priceRange !== priceFilter) return false;
      if (categoryFilter !== 'all' && r.category !== categoryFilter && r.category !== 'all') return false;
      return true;
    });
  }, [
    allRestaurants,
    cuisineFilter,
    ratingFilter,
    deliveryTimeFilter,
    priceFilter,
    categoryFilter,
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
          <Card>
              <CardHeader>
                  <CardTitle className="text-lg font-headline font-semibold">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Category</Label>
                   <RadioGroup value={categoryFilter} onValueChange={setCategoryFilter} className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="cat-all" />
                            <Label htmlFor="cat-all">All</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="veg" id="cat-veg" />
                            <Label htmlFor="cat-veg">Veg</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="non-veg" id="cat-non-veg" />
                            <Label htmlFor="cat-non-veg">Non-Veg</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Cuisine</Label>
                    <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                        <SelectTrigger>
                        <SelectValue placeholder="Filter by Cuisine" />
                        </SelectTrigger>
                        <SelectContent>
                        {uniqueCuisines.map((cuisine) => (
                            <SelectItem key={cuisine} value={cuisine}>
                            {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label className="text-base font-semibold">Rating</Label>
                    <Select value={ratingFilter} onValueChange={setRatingFilter}>
                        <SelectTrigger>
                        <SelectValue placeholder="Filter by Rating" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="all">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5 Stars & Up</SelectItem>
                        <SelectItem value="4">4 Stars & Up</SelectItem>
                        <SelectItem value="3">3 Stars & Up</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-base font-semibold">Delivery Time</Label>
                    <Select
                        value={deliveryTimeFilter}
                        onValueChange={setDeliveryTimeFilter}
                    >
                        <SelectTrigger>
                        <SelectValue placeholder="Filter by Delivery Time" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="all">Any Time</SelectItem>
                        <SelectItem value="30">Under 30 mins</SelectItem>
                        <SelectItem value="45">Under 45 mins</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-base font-semibold">Price</Label>
                    <Select value={priceFilter} onValueChange={setPriceFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Any Price</SelectItem>
                            <SelectItem value="cheap">$ (Cheap)</SelectItem>
                            <SelectItem value="moderate">$$ (Moderate)</SelectItem>
                            <SelectItem value="expensive">$$$ (Expensive)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
              </CardContent>
          </Card>
      </aside>
      <main className="lg:col-span-3">
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/restaurants/${restaurant.id}`} className="block">
                  <CardHeader className="p-0">
                    <Image
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                      data-ai-hint={`${restaurant.cuisine.toLowerCase()} food`}
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-headline font-semibold mb-1">
                        {restaurant.name}
                      </h3>
                       {restaurant.category === 'veg' && <Badge variant="secondary" className='bg-green-100 text-green-800 border-green-200'>Veg</Badge>}
                      {restaurant.category === 'non-veg' && <Badge variant="secondary" className='bg-red-100 text-red-800 border-red-200'>Non-Veg</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {restaurant.cuisine}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-3 mt-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">
                          {restaurant.rating.toFixed(1)}
                        </span>
                        <span className="hidden sm:inline">({restaurant.reviews.length} reviews)</span>
                      </div>
                       <Badge variant={restaurant.priceRange === 'cheap' ? 'outline' : restaurant.priceRange === 'moderate' ? 'secondary' : 'default'}>
                        {restaurant.priceRange === 'cheap' ? '$' : restaurant.priceRange === 'moderate' ? '$$' : '$$$'}
                       </Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.deliveryTime} min</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 lg:col-span-3">
            <h2 className="text-2xl font-semibold">No Restaurants Found</h2>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}