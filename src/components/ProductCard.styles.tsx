import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  imageContainer: {
  width: '100%',
  height: 225, // Set a fixed height
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  overflow: 'hidden', 
},
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,
  },
  productInfo: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  productDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  productImage: {
  width: '100%',
  height: '100%',
  borderRadius: 0,
},

});