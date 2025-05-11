import { color, fontSize, margin, padding } from '@Maplify/theme';
import { StyleSheet } from 'react-native';

export const dropdownStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    opacity: 0.9,
    backgroundColor: color.bg.primary,
    padding: padding.xl,
    marginTop: margin.md,
  },
  dropdown: {
    height: 50,
    borderColor: color.border.ghost,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: padding.md,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: color.bg.primary,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: padding.md,
    fontSize: fontSize.sm,
  },
  placeholderStyle: {
    fontSize: fontSize.md,
  },
  selectedTextStyle: {
    fontSize: fontSize.md,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: fontSize.md,
  },
});
