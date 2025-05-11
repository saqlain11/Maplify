import { Platform, StyleSheet } from 'react-native';

export const landingStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  searchPlaceContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
    width: '95%',
    top: Platform.OS === 'ios' ? '8%' : '5%',
  },
});
