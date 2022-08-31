import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS,
  ListView,
  Animated,
  Easing,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/Store';

const store = configureStore()

const BoardView = require('./pages/BoardView');

function SimonSays () {

    const Stack = createNativeStackNavigator();

    return(
    <Provider store = { store }>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Game" component={BoardView} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
)}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0B96',
  },
});

module.exports = SimonSays;

