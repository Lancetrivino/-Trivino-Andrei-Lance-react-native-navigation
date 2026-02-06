import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  ListRenderItem,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme, useCart } from '../contexts';
import { ThemeToggle } from '../components';
import { RootStackParamList, CartItem } from '../types';
import { styles } from './CheckoutScreen.styles';

type CheckoutScreenProps = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { theme, isDarkMode } = useTheme();
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();

  const totalPrice: number = getTotalPrice();
  const totalItems: number = getTotalItems();

  const handleCheckout = (): void => {
    Alert.alert(
      'Order Confirmed!',
      'Thank you for your purchase. Your order has been placed successfully!',
      [
        {
          text: 'Continue Shopping',
          onPress: () => {
            clearCart();
            navigation.navigate('Home');
          },
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  const renderCheckoutItem: ListRenderItem<CartItem> = ({ item }) => (
    <View style={[styles.itemContainer, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={[styles.itemImageContainer, { backgroundColor: theme.primary + '15' }]}>
        <Image 
          source={item.image} 
          style={styles.itemImage}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.itemDetails}>
        <Text style={[styles.itemName, { color: theme.text }]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={[styles.itemQuantity, { color: theme.textSecondary }]}>
          Qty: {item.quantity} × ₱{item.price.toFixed(2)}
        </Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={[styles.itemTotal, { color: theme.primary }]}>
          ₱{(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={[styles.backButton, { backgroundColor: theme.surface }]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={[styles.backButtonText, { color: theme.text }]}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.headerTextContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            Checkout
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Review your order
          </Text>
        </View>
        
        <ThemeToggle />
      </View>

      <View style={[styles.summaryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={styles.summaryHeader}>
          <Text style={[styles.summaryTitle, { color: theme.text }]}>
            Order Summary
          </Text>
        </View>
        
        <View style={styles.summaryContent}>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>
              Total Items
            </Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>
              {totalItems}
            </Text>
          </View>
          
          <View style={[styles.divider, { backgroundColor: theme.border }]} />
          
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>
              Subtotal
            </Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>
              ₱{totalPrice.toFixed(2)}
            </Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>
              Shipping
            </Text>
            <Text style={[styles.summaryValue, { color: theme.success }]}>
              Free
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Items in Order
        </Text>
        <View style={[styles.sectionBadge, { backgroundColor: theme.primary + '20' }]}>
          <Text style={[styles.sectionBadgeText, { color: theme.primary }]}>
            {cartItems.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCheckoutItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.footer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        <View style={styles.totalContainer}>
          <View>
            <Text style={[styles.totalLabel, { color: theme.textSecondary }]}>
              Total Amount
            </Text>
            <Text style={[styles.totalPrice, { color: theme.primary }]}>
              ₱{totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>
        
        <TouchableOpacity
          style={[styles.checkoutButton, { backgroundColor: theme.success }]}
          onPress={handleCheckout}
          activeOpacity={0.8}
        >
          <Text style={styles.checkoutButtonText}>✓ Complete Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;