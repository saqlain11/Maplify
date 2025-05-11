import { color, margin, padding } from '@Maplify/theme';
import { StyleSheet } from 'react-native';

export const tabStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: color.bg.ghost,
    opacity: 0.8,
    padding: padding.lg,
    marginHorizontal: margin.lg,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
