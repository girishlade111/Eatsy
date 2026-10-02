import { restaurants } from '@/lib/data';
import RestaurantListings from '@/components/restaurant-listings';
import { Suspense } from 'react';

// Static-export friendly: filtering is handled client-side inside
// RestaurantListings (state + URL params), so this page needs no searchParams.
export default function RestaurantsPage() {
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
          allRestaurants={restaurants}
          uniqueCuisines={uniqueCuisines}
        />
      </Suspense>
    </div>
  );
}
