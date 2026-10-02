
import { getRestaurantById, restaurants } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Clock, MessageSquare, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import MenuItemCard from '@/components/menu-item-card';

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ id: restaurant.id }));
}

export default function RestaurantDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const restaurant = getRestaurantById(params.id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div>
      <section className="relative h-[40vh] w-full bg-cover bg-center">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          style={{objectFit: 'cover'}}
          className="z-0"
          data-ai-hint={`${restaurant.cuisine.toLowerCase()} food restaurant`}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-2 drop-shadow-lg">
            {restaurant.name}
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            {restaurant.cuisine}
          </p>
          <div className="flex items-center gap-6 mt-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span>{restaurant.rating.toFixed(1)} ({restaurant.reviews.length} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{restaurant.deliveryTime} min delivery</span>
            </div>
            <Badge variant="secondary" className="text-sm">
                {restaurant.priceRange === 'cheap' ? '$' : restaurant.priceRange === 'moderate' ? '$$' : '$$$'}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-headline font-bold mb-6 flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-primary" /> Menu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurant.menu.map(item => (
                <MenuItemCard key={item.id} item={item} restaurant={{id: restaurant.id, name: restaurant.name}} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" /> Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {restaurant.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {restaurant.reviews.map(review => (
                      <div key={review.id}>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold">{review.user}</p>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span>{review.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No reviews yet.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
