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
import { ProductCard, ThemeToggle } from '../components';
import { products } from '../data';
import { RootStackParamList, Product } from '../types';
import { styles } from './HomeScreen.styles';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme, isDarkMode } = useTheme();
  const { getTotalItems } = useCart();

  const cartItemCount: number = getTotalItems();

  const renderProduct: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.greeting, { color: theme.textSecondary }]}>
            Welcome to
          </Text>
          <Text style={[styles.title, { color: theme.text }]}>
            Tindahan ni ALT
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Your one-stop shop for premium car care products
          </Text>
        </View>
        <ThemeToggle />
      </View>

      <View style={[styles.statsContainer, { backgroundColor: theme.surface }]}>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, { color: theme.primary }]}>{products.length}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Products</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, { color: theme.success }]}>{cartItemCount}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>In Cart</Text>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {cartItemCount > 0 && (
        <TouchableOpacity
          style={[styles.cartButton, { backgroundColor: theme.primary }]}
          onPress={() => navigation.navigate('Cart')}
          activeOpacity={0.8}
        >
          <View style={styles.cartButtonContent}>
            <Text style={styles.cartButtonText}>View Cart</Text>
            <View style={[styles.cartBadge, { backgroundColor: theme.success }]}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;