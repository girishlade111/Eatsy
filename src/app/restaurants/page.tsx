import { restaurants } from '@/lib/data';
import RestaurantListings from '@/components/restaurant-listings';

export default function RestaurantsPage() {
  // In a real app, you would fetch this data from an API
  const allRestaurants = restaurants;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Explore All Restaurants
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          From local favorites to hidden gems, find the perfect meal to satisfy your cravings. Use the filters to narrow down your options.
        </p>
      </div>
      <RestaurantListings allRestaurants={allRestaurants} />
    </div>
  );
}
