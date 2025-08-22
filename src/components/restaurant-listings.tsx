'use client';

import { useState, useMemo } from 'react';
import type { Restaurant } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
      return true;
    });
  }, [
    allRestaurants,
    cuisineFilter,
    ratingFilter,
    deliveryTimeFilter,
    priceFilter,
  ]);

  return (
    <div>
      <div className="mb-8 p-4 bg-card rounded-lg shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="cheap">$</SelectItem>
              <SelectItem value="moderate">$$</SelectItem>
              <SelectItem value="expensive">$$$</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Badge variant={restaurant.priceRange === 'cheap' ? 'default' : 'secondary'}>
                      {restaurant.priceRange === 'cheap' ? '$' : restaurant.priceRange === 'moderate' ? '$$' : '$$$'}
                    </Badge>
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
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">No Restaurants Found</h2>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
