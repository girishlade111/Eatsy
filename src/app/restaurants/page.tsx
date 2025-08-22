import { restaurants } from '@/lib/data';
import RestaurantListings from '@/components/restaurant-listings';
import type { Restaurant } from '@/lib/types';
import { Suspense } from 'react';

export default function RestaurantsPage({
  searchParams,
}: {
  searchParams?: {
    cuisine?: string;
    rating?: string;
    deliveryTime?: string;
    price?: string;
    category?: string;
  };
}) {
  const cuisineFilter = searchParams?.cuisine || 'all';
  const ratingFilter = searchParams?.rating || 'all';
  const deliveryTimeFilter = searchParams?.deliveryTime || 'all';
  const priceFilter = searchParams?.price || 'all';
  const categoryFilter = searchParams?.category || 'all';

  const filteredRestaurants = restaurants.filter((r) => {
    if (cuisineFilter !== 'all' && r.cuisine !== cuisineFilter) return false;
    if (ratingFilter !== 'all' && r.rating < parseFloat(ratingFilter))
      return false;
    if (
      deliveryTimeFilter !== 'all' &&
      r.deliveryTime > parseInt(deliveryTimeFilter)
    )
      return false;
    if (priceFilter !== 'all' && r.priceRange !== priceFilter) return false;
    if (
      categoryFilter !== 'all' &&
      r.category !== categoryFilter &&
      r.category !== 'all'
    )
      return false;
    return true;
  });

  const uniqueCuisines = [
    'all',
    ...Array.from(new Set(restaurants.map((r) => r.cuisine))),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Explore All Restaurants
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          From local favorites to hidden gems, find the perfect meal to satisfy
          your cravings. Use the filters to narrow down your options.
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RestaurantListings
          allRestaurants={filteredRestaurants}
          uniqueCuisines={uniqueCuisines}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}
