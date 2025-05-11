import { color } from '@Maplify/theme';
import { StyleSheet } from 'react-native';

export const loaderStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    backgroundColor: color.bg.secondary,
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
