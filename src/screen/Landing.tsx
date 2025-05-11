import { History, Loader, Map, SearchPlace, Tab } from '@Maplify/component';
import { TABS } from '@Maplify/constant';
import { GeneralContext } from '@Maplify/context';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { landingStyle } from './Landing.style';

const Landing = () => {
  const { activeTab, isSearching } = useContext(GeneralContext);
  return (
    <View style={landingStyle.container}>
      <Map />
      <View style={landingStyle.searchPlaceContainer}>
        <Tab />
        {activeTab === TABS.SEARCH ? <SearchPlace /> : <History />}
      </View>
      {isSearching && <Loader />}
    </View>
  );
};

export default Landing;
