import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ListRenderItem,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme, useCart } from '../contexts';
import { CartItem, ThemeToggle } from '../components';
import { RootStackParamList, CartItem as CartItemType } from '../types';
import { styles } from './CartScreen.styles';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { theme, isDarkMode } = useTheme();
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  const totalPrice: number = getTotalPrice();
  const totalItems: number = getTotalItems();

  const handleProceedToCheckout = (): void => {
    if (cartItems.length > 0) {
      navigation.navigate('Checkout');
    }
  };

  const renderCartItem: ListRenderItem<CartItemType> = ({ item }) => (
    <CartItem item={item} />
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
            Shopping Cart
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </Text>
        </View>
        
        <ThemeToggle />
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={[styles.emptyIconContainer, { backgroundColor: theme.surface }]}>
            <Text style={styles.emptyIcon}>🛒</Text>
          </View>
          <Text style={[styles.emptyTitle, { color: theme.text }]}>
            Your cart is empty
          </Text>
          <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
            Add some products to get started
          </Text>
          <TouchableOpacity
            style={[styles.shopButton, { backgroundColor: theme.primary }]}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
          >
            <Text style={styles.shopButtonText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCartItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />

          <View style={[styles.footer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
            <View style={[styles.summaryCard, { backgroundColor: theme.card }]}>
              <View style={styles.summaryRow}>
                <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>
                  Subtotal ({totalItems} items)
                </Text>
                <Text style={[styles.summaryValue, { color: theme.text }]}>
                  ₱{totalPrice.toFixed(2)}
                </Text>
              </View>
              <View style={[styles.divider, { backgroundColor: theme.border }]} />
              <View style={styles.summaryRow}>
                <Text style={[styles.totalLabel, { color: theme.text }]}>
                  Total Amount
                </Text>
                <Text style={[styles.totalPrice, { color: theme.primary }]}>
                  ₱{totalPrice.toFixed(2)}
                </Text>
              </View>
            </View>
            
            <TouchableOpacity
              style={[styles.checkoutButton, { backgroundColor: theme.primary }]}
              onPress={handleProceedToCheckout}
              activeOpacity={0.8}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;