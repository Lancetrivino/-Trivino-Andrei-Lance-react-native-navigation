import { Product } from '../types';


export const products: Product[] = [
  {
    id: 1,
    name: 'All Purpose Cleaner',
    price: 650.00,
    description: 'A specialized solution for automotive surfaces, engines, and wheels',
    image: require('../../assets/apc.jpg'),
  },
  {
    id: 2,
    name: 'All Purpose Dressing',
    price: 750.00,
    description: 'Formulated to deliver a rich, deep shine to various surfaces.',
    image: require('../../assets/APD.jpg'),
  },
  {
    id: 3,
    name: 'Car Freshener Fresh Bamboo',
    price: 800.00,
    description: 'fragrance solution designed to infuse the vehicle with a serene and rejuvenating bamboo essence.',
    image: require('../../assets/carfreshener.jpg'),
  },
  {
    id: 4,
    name: 'Premium Car Shampoo',
    price: 650.00,
    description: 'Durable USB-C cable with fast charging',
    image: require('../../assets/carshampoo.jpg'),
  },
  {
    id: 5,
    name: 'Hanging Difuser',
    price: 150.00,
    description: 'Oil-based formulas for a long-lasting car ambiance.',
    image: require('../../assets/hanging-difusers.jpg'),
  },
  {
    id: 6,
    name: 'Interior Detailer',
    price: 1000.00,
    description: 'A premium-grade product for total interior rejuvenation',
    image: require('../../assets/interiordetail.jpg'),
  },
  {
    id: 7,
    name: 'Microfiber Cloth',
    price: 150.00,
    description: 'A high-quality 40cm x 40cm (400GSM) cleaning accessory',
    image: require('../../assets/mircofiber.jpg'),
  },
  {
    id: 8,
    name: 'Motorcycle Care Kit',
    price: 800.00,
    description: 'A comprehensive collection designed to keep motorcycles looking their best.',
    image: require('../../assets/motorkit.jpg'),
  },
  {
    id: 9,
    name: 'Tire Black Clear',
    price: 600.00,
    description: 'Designed to enhance the natural beauty of tires.',
    image: require('../../assets/tireblackclear.jpg'),
  },
  {
    id: 10,
    name: 'Tire Cream',
    price: 1000.00,
    description: 'A solution for a "sleek and sophisticated" look.',
    image: require('../../assets/Tirecream.jpg'),
  },
];