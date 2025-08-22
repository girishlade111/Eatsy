import { Button } from '@/components/ui/button';
import { restaurants } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  ChefHat,
  Bike,
  ShoppingBag,
  Star,
  Clock,
  Heart,
  Award,
  Leaf,
} from 'lucide-react';

export default function Home() {
  const featuredRestaurants = restaurants.slice(0, 4);

  return (
    <div className="flex flex-col font-sans">
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white bg-cover bg-center">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="food collage"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="z-20 p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Delicious food, delivered to you
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            The best restaurants at your fingertips. Order your favorite meal online and we'll deliver it to your door.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 px-8"
          >
            <Link href="/restaurants">
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-6 mb-6">
                <ShoppingBag className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                1. Explore & Select
              </h3>
              <p className="text-muted-foreground">
                Dive into a world of flavors. Browse diverse menus from top-rated local restaurants, discover new culinary gems, and add your cravings to the cart with a simple tap.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-6 mb-6">
                <Bike className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                2. Secure Checkout & Speedy Delivery
              </h3>
              <p className="text-muted-foreground">
                Finalize your order with our secure and seamless payment process. Then, sit back and relax as our dedicated riders race against time to bring your hot and fresh meal right to your doorstep.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-6 mb-6">
                <ChefHat className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                3. Savor the Moment
              </h3>
              <p className="text-muted-foreground">
                Unpack a delightful meal prepared with care and ready to be enjoyed. From our kitchen to your table, experience the ultimate convenience without compromising on quality. Bon appétit!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-restaurants" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl"
              >
                <Link href={`/restaurants/${restaurant.id}`}>
                  <CardHeader className="p-0">
                    <Image
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                      data-ai-hint={restaurant.cuisine.toLowerCase()}
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-headline mb-2">
                      {restaurant.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {restaurant.cuisine}
                    </CardDescription>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{restaurant.rating.toFixed(1)}</span>
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
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/restaurants">
                View All Restaurants <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Why Choose Eatsy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="bg-primary/20 rounded-full p-5 mb-5">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                Unmatched Quality
              </h3>
              <p className="text-muted-foreground">
                We partner with only the best, most-loved restaurants in your area, ensuring every meal is a top-quality experience.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="bg-primary/20 rounded-full p-5 mb-5">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                Curated for You
              </h3>
              <p className="text-muted-foreground">
                From local favorites to exotic cuisines, our vast selection is curated to satisfy any craving and dietary need.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="bg-primary/20 rounded-full p-5 mb-5">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                Fresh & Fast
              </h3>
              <p className="text-muted-foreground">
                Our commitment to speed doesn't compromise freshness. Get your food delivered quickly, so you can enjoy it at its best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
