import { color, fontSize, margin } from '@Maplify/theme';
import { StyleSheet } from 'react-native';

export const tabButtonStyle = StyleSheet.create({
  buttonActive: {
    backgroundColor: color.bg.primary,
  },
  text: {
    fontSize: fontSize.md,
    color: color.text.primary,
  },
  textActive: {
    color: color.text.secondary,
  },
  button: {
    marginLeft: margin.xl,
    width: '45%',
    borderRadius: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
