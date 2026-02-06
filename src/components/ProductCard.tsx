import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme, useCart } from '../contexts';
import { Product, RootStackParamList } from '../types';
import { styles } from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const navigation = useNavigation<NavigationProp>();

  const handleAddToCart = (): void => {
    addToCart(product);
  };

  const handleCardPress = (): void => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}
      onPress={handleCardPress}
      activeOpacity={0.7}
    >
      <View style={[styles.imageContainer, { backgroundColor: theme.primary + '10' }]}>
        <Image 
          source={product.image} 
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.productInfo}>
          <Text style={[styles.productName, { color: theme.text }]} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={[styles.productDescription, { color: theme.textSecondary }]} numberOfLines={2}>
            {product.description}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>Price</Text>
            <Text style={[styles.productPrice, { color: theme.primary }]}>
              ₱{product.price.toFixed(2)}
            </Text>
          </View>
          
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: theme.primary }]}
            onPress={(e) => {
              e.stopPropagation(); // Prevent card press when tapping Add button
              handleAddToCart();
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.addButtonText}>Add +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;