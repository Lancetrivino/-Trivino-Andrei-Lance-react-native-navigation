import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTheme, useCart } from '../contexts';
import { CartItem as CartItemType } from '../types';
import { styles } from './CartItem.styles';
import { ImageSourcePropType } from 'react-native';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { theme } = useTheme();
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = (): void => {
    updateQuantity(item.id, 'increase');
  };

  const handleDecrease = (): void => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, 'decrease');
    }
  };

  const totalPrice: string = (item.price * item.quantity).toFixed(2);

  return (
    <View style={[styles.container, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={[styles.imageContainer, { backgroundColor: theme.primary + '15' }]}>
        <Image 
          source={item.image} 
          style={styles.itemImage}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, { color: theme.text }]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={[styles.itemPrice, { color: theme.textSecondary }]}>
          ₱{item.price.toFixed(2)} each
        </Text>
        <View style={styles.totalPriceContainer}>
          <Text style={[styles.totalLabel, { color: theme.textSecondary }]}>Total: </Text>
          <Text style={[styles.totalPrice, { color: theme.primary }]}>
            ₱{totalPrice}
          </Text>
        </View>
      </View>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={[styles.quantityButton, { backgroundColor: theme.danger }]}
          onPress={handleDecrease}
          activeOpacity={0.7}
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        
        <View style={[styles.quantityBadge, { backgroundColor: theme.surface }]}>
          <Text style={[styles.quantity, { color: theme.text }]}>
            {item.quantity}
          </Text>
        </View>
        
        <TouchableOpacity
          style={[styles.quantityButton, { backgroundColor: theme.success }]}
          onPress={handleIncrease}
          activeOpacity={0.7}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;