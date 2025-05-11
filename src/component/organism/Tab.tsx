import { APP_TEXT, TABS } from '@Maplify/constant';
import { GeneralContext } from '@Maplify/context';
import { useCallback, useContext } from 'react';
import { View } from 'react-native';
import { TabButton } from '../molecule';
import { tabStyle } from './Tab.style';
const Tab = () => {
  const { activeTab, setActiveTab } = useContext(GeneralContext);

  const onTabPress = useCallback(
    (tab: TABS) => {
      activeTab !== tab && setActiveTab(tab);
    },
    [setActiveTab, activeTab],
  );

  return (
    <View style={tabStyle.container}>
      <TabButton
        onTabPress={onTabPress}
        text={APP_TEXT.SEARCH_FROM_PLACES}
        isTabActive={activeTab === TABS.SEARCH}
      />
      <TabButton
        onTabPress={onTabPress}
        text={APP_TEXT.SEARCH_FROM_HISTORY}
        isTabActive={activeTab === TABS.HISTORY}
        activeTab={TABS.HISTORY}
      />
    </View>
  );
};

export default Tab;
