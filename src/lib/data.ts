import type { Restaurant } from './types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: 30,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [
      { id: 'r1', user: 'John D.', rating: 5, comment: 'Best pizza in town!' },
      { id: 'r2', user: 'Jane S.', rating: 4, comment: 'Good, but a bit pricey.' },
    ],
    menu: [
      {
        id: 'm1',
        name: 'Margherita Pizza',
        description: 'Classic cheese and tomato pizza.',
        price: 12.99,
        imageUrl: 'https://placehold.co/100x100.png',
      },
      {
        id: 'm2',
        name: 'Pepperoni Pizza',
        description: 'Loaded with pepperoni and cheese.',
        price: 14.99,
        imageUrl: 'https://placehold.co/100x100.png',
      },
      {
        id: 'm3',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: 5.99,
        imageUrl: 'https://placehold.co/100x100.png',
      },
    ],
  },
  {
    id: '2',
    name: 'Sushi Station',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: 45,
    priceRange: 'expensive',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [
      { id: 'r3', user: 'Kenji T.', rating: 5, comment: 'Authentic and fresh!' },
    ],
    menu: [
      {
        id: 'm4',
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber.',
        price: 8.5,
        imageUrl: 'https://placehold.co/100x100.png',
      },
      {
        id: 'm5',
        name: 'Tuna Nigiri',
        description: 'Fresh tuna on rice.',
        price: 6.0,
        imageUrl: 'https://placehold.co/100x100.png',
      },
    ],
  },
  {
    id: '3',
    name: 'Burger Barn',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: 25,
    priceRange: 'cheap',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
      {
        id: 'm6',
        name: 'Classic Burger',
        description: 'Beef patty, lettuce, tomato, and cheese.',
        price: 9.99,
        imageUrl: 'https://placehold.co/100x100.png',
      },
      {
        id: 'm7',
        name: 'Fries',
        description: 'Crispy golden fries.',
        price: 3.99,
        imageUrl: 'https://placehold.co/100x100.png',
      },
    ],
  },
  {
    id: '4',
    name: 'Taco Town',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: 35,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
      {
        id: 'm8',
        name: 'Carne Asada Tacos',
        description: 'Three grilled steak tacos.',
        price: 11.5,
        imageUrl: 'https://placehold.co/100x100.png',
      },
      {
        id: 'm9',
        name: 'Guacamole & Chips',
        description: 'Freshly made guacamole with tortilla chips.',
        price: 7.0,
        imageUrl: 'https://placehold.co/100x100.png',
      },
    ],
  },
  {
    id: '5',
    name: 'Curry House',
    cuisine: 'Indian',
    rating: 4.9,
    deliveryTime: 50,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
        { id: 'm10', name: 'Chicken Tikka Masala', description: 'Creamy chicken curry.', price: 15.99, imageUrl: 'https://placehold.co/100x100.png' },
        { id: 'm11', name: 'Garlic Naan', description: 'Soft flatbread with garlic.', price: 4.50, imageUrl: 'https://placehold.co/100x100.png' }
    ]
  },
  {
    id: '6',
    name: 'Pad Thai Place',
    cuisine: 'Thai',
    rating: 4.7,
    deliveryTime: 40,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
        { id: 'm12', name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp.', price: 13.99, imageUrl: 'https://placehold.co/100x100.png' },
        { id: 'm13', name: 'Tom Yum Soup', description: 'Spicy and sour soup.', price: 6.99, imageUrl: 'https://placehold.co/100x100.png' }
    ]
  }
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(r => r.id === id);
}
