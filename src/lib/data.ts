
import type { Restaurant, Combo } from './types';

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
        category: 'veg',
      },
      {
        id: 'm2',
        name: 'Pepperoni Pizza',
        description: 'Loaded with pepperoni and cheese.',
        price: 14.99,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
      {
        id: 'm3',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: 5.99,
        imageUrl: 'https://images.unsplash.com/photo-1662966732476-5b743568237e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkZWxpY2lvdXMlMjBmb29kfGVufDB8fHx8MTc1NTg2MzAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'veg',
        offer: '15% off'
      },
      {
        id: 'm14',
        name: 'Veggie Supreme',
        description: 'A mix of fresh vegetables on a cheesy base.',
        price: 15.99,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'veg',
      }
    ],
    category: 'all'
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
      { id: 'r4', user: 'Emily R.', rating: 4.5, comment: 'The dragon roll is a must-try.' },
    ],
    menu: [
      {
        id: 'm4',
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber.',
        price: 8.5,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
      {
        id: 'm5',
        name: 'Tuna Nigiri',
        description: 'Fresh tuna on rice.',
        price: 6.0,
        imageUrl: 'https://images.unsplash.com/photo-1520218508822-998633d997e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHx8fDE3NTU4NjMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'non-veg',
        offer: '10% off'
      },
      {
        id: 'm15',
        name: 'Dragon Roll',
        description: 'Eel and cucumber topped with avocado.',
        price: 14.50,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
      {
        id: 'm16',
        name: 'Miso Soup',
        description: 'Traditional Japanese soup with tofu and seaweed.',
        price: 3.50,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'veg',
      },
    ],
    category: 'non-veg'
  },
  {
    id: '3',
    name: 'Burger Barn',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: 25,
    priceRange: 'cheap',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [
      { id: 'r5', user: 'Mike L.', rating: 4, comment: 'Great value for money.'}
    ],
    menu: [
      {
        id: 'm6',
        name: 'Classic Burger',
        description: 'Beef patty, lettuce, tomato, and cheese.',
        price: 9.99,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
      {
        id: 'm7',
        name: 'Fries',
        description: 'Crispy golden fries.',
        price: 3.99,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'veg',
      },
      {
        id: 'm17',
        name: 'Bacon Cheeseburger',
        description: 'The classic with added crispy bacon.',
        price: 11.99,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
    ],
    category: 'non-veg'
  },
  {
    id: '4',
    name: 'Taco Town',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: 35,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [
        { id: 'r6', user: 'Maria G.', rating: 5, comment: 'The tacos are so flavorful!'}
    ],
    menu: [
      {
        id: 'm8',
        name: 'Carne Asada Tacos',
        description: 'Three grilled steak tacos.',
        price: 11.5,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      },
      {
        id: 'm9',
        name: 'Guacamole & Chips',
        description: 'Freshly made guacamole with tortilla chips.',
        price: 7.0,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'veg',
      },
      {
        id: 'm18',
        name: 'Chicken Quesadilla',
        description: 'Flour tortilla with chicken, cheese, and peppers.',
        price: 10.50,
        imageUrl: 'https://placehold.co/100x100.png',
        category: 'non-veg',
      }
    ],
    category: 'all'
  },
  {
    id: '5',
    name: 'Curry House',
    cuisine: 'Indian',
    rating: 4.9,
    deliveryTime: 50,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [
        { id: 'r7', user: 'Raj P.', rating: 5, comment: 'Best Indian food I\'ve had outside of India.'}
    ],
    menu: [
        { id: 'm10', name: 'Chicken Tikka Masala', description: 'Creamy chicken curry.', price: 15.99, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' },
        { id: 'm11', name: 'Garlic Naan', description: 'Soft flatbread with garlic.', price: 4.50, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' },
        { id: 'm19', name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas.', price: 5.50, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' }
    ],
    category: 'all'
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
        { id: 'm12', name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp.', price: 13.99, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' },
        { id: 'm13', name: 'Tom Yum Soup', description: 'Spicy and sour soup.', price: 6.99, imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkZWxpY2lvdXMlMjBmb29kfGVufDB8fHx8MTc1NTg2MzAwMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'non-veg', offer: '20% off' },
        { id: 'm20', name: 'Green Curry', description: 'Spicy green curry with chicken and bamboo shoots.', price: 14.99, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' }
    ],
    category: 'non-veg'
  },
  {
    id: '7',
    name: 'The Green Bowl',
    cuisine: 'Vegan',
    rating: 4.9,
    deliveryTime: 30,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
        { id: 'm21', name: 'Quinoa Power Bowl', description: 'Quinoa, avocado, chickpeas, and mixed greens.', price: 13.50, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' },
        { id: 'm22', name: 'Lentil Soup', description: 'A hearty and healthy lentil soup.', price: 7.50, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' }
    ],
    category: 'veg'
  },
  {
    id: '8',
    name: 'Pho Real',
    cuisine: 'Vietnamese',
    rating: 4.8,
    deliveryTime: 40,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
        { id: 'm23', name: 'Classic Beef Pho', description: 'Rich broth with rice noodles and tender beef.', price: 12.99, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' },
        { id: 'm24', name: 'Spring Rolls', description: 'Fresh spring rolls with shrimp and vermicelli.', price: 6.50, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' }
    ],
    category: 'non-veg'
  },
  {
    id: '9',
    name: 'Salad Garden',
    cuisine: 'Healthy',
    rating: 4.6,
    deliveryTime: 20,
    priceRange: 'moderate',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
      { id: 'm25', name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, and Caesar dressing.', price: 10.99, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' },
      { id: 'm26', name: 'Greek Salad', description: 'Tomatoes, cucumbers, olives, feta cheese, and red onion.', price: 11.99, imageUrl: 'https://placehold.co/100x100.png', category: 'veg' },
    ],
    category: 'veg'
  },
  {
    id: '10',
    name: 'BBQ Central',
    cuisine: 'Barbecue',
    rating: 4.7,
    deliveryTime: 55,
    priceRange: 'expensive',
    imageUrl: 'https://placehold.co/400x250.png',
    reviews: [],
    menu: [
      { id: 'm27', name: 'Pulled Pork Sandwich', description: 'Slow-smoked pulled pork on a brioche bun.', price: 14.50, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg' },
      { id: 'm28', name: 'Beef Brisket Plate', description: 'Tender beef brisket with a side of coleslaw.', price: 19.99, imageUrl: 'https://placehold.co/100x100.png', category: 'non-veg', offer: '10% off' },
    ],
    category: 'non-veg'
  }
];

export const combos: Combo[] = [
    {
      id: 'c1',
      name: 'Pizza Party Pack',
      description: 'One large Pepperoni Pizza, one large Margherita, and a side of Garlic Bread.',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1647592286101-5e0e8f5ada6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmb29kJTIwY29tYm98ZW58MHx8fHwxNzU1ODYzMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Pizza Palace',
    },
    {
      id: 'c2',
      name: 'Burger & Fries Duo',
      description: 'Two Classic Burgers and a large portion of our crispy golden fries.',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxmb29kJTIwY29tYm98ZW58MHx8fHwxNzU1ODYzMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Burger Barn',
    },
    {
      id: 'c3',
      name: 'Taco Fiesta',
      description: 'Six Carne Asada Tacos and a generous serving of Guacamole & Chips.',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1616205255912-e67ed29ac474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmb29kJTIwY29tYm98ZW58MHx8fHwxNzU1ODYzMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      restaurantName: 'Taco Town',
    },
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(r => r.id === id);
}

    