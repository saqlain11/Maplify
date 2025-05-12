import { color } from '@Maplify/theme';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { loaderStyle } from './Loader.style';

const Loader = () => {
  return (
    <View testID="loader" style={loaderStyle.container}>
      <ActivityIndicator size="large" color={color.bg.primary} />
    </View>
  );
};

export default Loader;
