import { ImageSourcePropType } from 'react-native';
// Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: ImageSourcePropType;  // For local images
  imageUrl?: string;             // For remote URLs
}

// Cart item interface (extends Product with quantity)
export interface CartItem extends Product {
  quantity: number;
  image: ImageSourcePropType;
}

// Theme colors interface
export interface Theme {
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  primary: string;
  primaryDark: string;
  success: string;
  danger: string;
  border: string;
  shadow: string;
}

// Theme context interface
export interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Cart context interface
export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// Navigation prop types
export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};