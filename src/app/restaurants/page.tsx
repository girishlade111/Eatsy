import { restaurants } from '@/lib/data';
import RestaurantListings from '@/components/restaurant-listings';

export default function RestaurantsPage() {
  // In a real app, you would fetch this data from an API
  const allRestaurants = restaurants;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Restaurants Near You
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover the best food from the top-rated restaurants.
        </p>
      </div>
      <RestaurantListings allRestaurants={allRestaurants} />
    </div>
  );
}
