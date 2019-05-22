import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Lista from './src/Lista';
import Receita from './src/Receita';

const AppNavigator = createStackNavigator({
  Lista: {
    screen:Lista
  },
  Receita: {
    screen:Receita
  }
},{
  headerLayoutPreset:'center'
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;