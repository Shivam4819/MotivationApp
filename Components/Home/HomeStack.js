import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeComponent from "./HomeComponent";
import CardComponent from "../Card/CardComponent";
import QuotesComponent from "../Quotes/QutoesComponent";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

  <Navigator headerMode="none">
    <Screen name="Home" component={HomeComponent} />
    <Screen name="Card" component={CardComponent} />
    <Screen name="Quotes" component={QuotesComponent} />

  </Navigator>

);
export const AppNavigator = () => (

  <NavigationContainer>

    <HomeNavigator />

  </NavigationContainer>

);

