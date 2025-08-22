export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number; // in minutes
  priceRange: 'cheap' | 'moderate' | 'expensive';
  imageUrl: string;
  reviews: Review[];
  menu: MenuItem[];
  category: 'veg' | 'non-veg' | 'all';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  offer?: string;
  category: 'veg' | 'non-veg';
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export interface Combo {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantName: string;
}