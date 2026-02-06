import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 32,
  },
  priceSection: {
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: 20,
  },
  descriptionSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
  },
  featuresSection: {
    marginTop: 4,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  featureBullet: {
    fontSize: 12,
    marginTop: 4,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  quantitySection: {
    marginBottom: 12,
  },
  quantityLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  quantityDisplay: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
  },
  addToCartButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});