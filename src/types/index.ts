import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  features: string[]; 
}

export interface CartItem extends Product {
  quantity: number;
}

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

export interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
  ProductDetail: { product: Product };
};