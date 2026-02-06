import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme, useCart } from '../contexts';
import { ThemeToggle } from '../components';
import { RootStackParamList } from '../types';
import { styles } from './ProductDetailScreen.styles';

type ProductDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const { theme, isDarkMode } = useTheme();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = (): void => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = (): void => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = (): void => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    Alert.alert(
      '✓ Added to Cart',
      `${quantity} ${quantity === 1 ? 'item' : 'items'} added to your cart`,
      [
        {
          text: 'Continue Shopping',
          style: 'cancel',
        },
        {
          text: 'View Cart',
          onPress: () => navigation.navigate('Cart'),
        },
      ]
    );
    
    setQuantity(1);
  };

  const totalPrice = product.price * quantity;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={[styles.backButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={[styles.backButtonText, { color: theme.text }]}>←</Text>
        </TouchableOpacity>
        
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Product Details
        </Text>
        
        <ThemeToggle />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Product Image */}
        <View style={[styles.imageContainer, { backgroundColor: theme.surface }]}>
          <Image 
            source={product.image} 
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Info Card */}
        <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
          {/* Product Name */}
          <Text style={[styles.productName, { color: theme.text }]}>
            {product.name}
          </Text>

          {/* Price */}
          <View style={styles.priceSection}>
            <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>
              Price
            </Text>
            <Text style={[styles.productPrice, { color: theme.primary }]}>
              ₱{product.price.toFixed(2)}
            </Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Description
            </Text>
            <Text style={[styles.description, { color: theme.textSecondary }]}>
              {product.description}
            </Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          {/* Features - Now dynamic based on product */}
          <View style={styles.featuresSection}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Features
            </Text>
            <View style={styles.featuresList}>
              {product.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={[styles.featureBullet, { color: theme.primary }]}>●</Text>
                  <Text style={[styles.featureText, { color: theme.textSecondary }]}>
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Spacing for footer */}
        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Footer - Quantity & Add to Cart */}
      <View style={[styles.footer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        {/* Quantity Selector */}
        <View style={styles.quantitySection}>
          <Text style={[styles.quantityLabel, { color: theme.textSecondary }]}>
            Quantity
          </Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={[styles.quantityButton, { backgroundColor: theme.card, borderColor: theme.border }]}
              onPress={handleDecrease}
              activeOpacity={0.7}
            >
              <Text style={[styles.quantityButtonText, { color: theme.text }]}>−</Text>
            </TouchableOpacity>
            
            <View style={[styles.quantityDisplay, { backgroundColor: theme.background }]}>
              <Text style={[styles.quantityText, { color: theme.text }]}>
                {quantity}
              </Text>
            </View>
            
            <TouchableOpacity
              style={[styles.quantityButton, { backgroundColor: theme.card, borderColor: theme.border }]}
              onPress={handleIncrease}
              activeOpacity={0.7}
            >
              <Text style={[styles.quantityButtonText, { color: theme.text }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={[styles.addToCartButton, { backgroundColor: theme.primary }]}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
            <Text style={styles.totalPriceText}>₱{totalPrice.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;