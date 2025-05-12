import { TABS } from '@Maplify/constant';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { tabButtonStyle } from './TabButton.style';
interface TabButtonProps {
  text: string;
  isTabActive: boolean;
  onTabPress: (tab: TABS) => void;
  activeTab?: TABS;
}
const TabButton = ({
  text,
  isTabActive,
  onTabPress,
  activeTab = TABS.SEARCH,
}: TabButtonProps) => {
  return (
    <TouchableOpacity
      testID="tab-button"
      onPress={() => {
        onTabPress(activeTab);
      }}
      style={[
        tabButtonStyle.button,
        isTabActive && tabButtonStyle.buttonActive,
      ]}>
      <Text
        style={[tabButtonStyle.text, isTabActive && tabButtonStyle.textActive]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(TabButton);
