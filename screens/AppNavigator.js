/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
// MainStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SellNowPopup from './sellNowPopup';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './profile';
import More from './more';
import MyGarage from './myGarage';
import homeCarInspection from './homeCarInspection';
import home from './home'
import homeBuyCarForMe from './homeBuyCarForMe';
import BasicInfoCarInspection from './basicInfoCarInspection';
import BookExpertVisitCarInspection from './bookExpertVisitCarInspection';
import CheckoutCarInspection from './checkoutCarInspection';
import ManagedByAutoFinder from './components/managedByAutoFinder';
import sellNowChoosePlan from './sellNowChoosePlan';
import HomeSellItForMe from './homeSellItForMe';
import SellItMyself from './sellItMySelf';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none" initialRouteName="home">
      <Stack.Screen name="home" component={home} />
      <Stack.Screen
        name="SellNowPopup"
        component={SellNowPopup}
        options={{
          cardStyle: { backgroundColor: 'transparent' },
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="homeCarInspection" component={homeCarInspection} />
      <Stack.Screen name="more" component={More} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="MyGarage" component={MyGarage} />
      <Stack.Screen name="homeBuyCarForMe" component={homeBuyCarForMe} />
      <Stack.Screen name="basicInfoCarInspection" component={BasicInfoCarInspection} />
      <Stack.Screen name="bookExpertVisitCarInspection" component={BookExpertVisitCarInspection} />
      <Stack.Screen name="checkoutCarInspection" component={CheckoutCarInspection} />
      <Stack.Screen name="managedByAutoFinder" component={ManagedByAutoFinder} />
      <Stack.Screen name="sellNowChoosePlan" component={sellNowChoosePlan} />
      <Stack.Screen name="homeSellItForMe" component={HomeSellItForMe} />
      <Stack.Screen name="sellItMyself" component={SellItMyself} />
    </Stack.Navigator>

  );
};

export default AppNavigator;



