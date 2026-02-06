import React from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import { useTheme } from '../contexts';
import { styles } from './ThemeToggle.styles';

const ThemeToggle: React.FC = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const animatedValue = React.useRef(new Animated.Value(isDarkMode ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isDarkMode ? 1 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  }, [isDarkMode]);

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity
      style={[styles.toggleButton, { backgroundColor: theme.primary }]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      <Animated.Text style={[styles.toggleText, { transform: [{ rotate: rotation }] }]}>
        {isDarkMode ? '☀️' : '🌙'}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;