import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


///@ROUTES
import { ScoreScreen } from '../screens/score/score.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appy from '../screens/game/Appy';
import { GameScreen } from '../screens/game/game.screen';
import AccountRoutes from './stacks/accountStackNavigation';

const PRIMARY = 'red'
const PRIMARYDARKER= 'black' 
const WHITE = 'white' 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => { 

  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomeTabs} />        
        <Stack.Screen
        name="Appy"
        component={Appy}        
        />
    </Stack.Navigator>
 
    </NavigationContainer>
  );
};

export default Routes;



function HomeTabs() {
  return (
        <Tab.Navigator
        initialRouteName="AccountTab"
        screenOptions={{
          //unmountonblur reseta as stacks ao sair da tab
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: PRIMARYDARKER,
          tabBarBadgeStyle: {backgroundColor: PRIMARYDARKER},
          tabBarStyle: {
            backgroundColor: WHITE,
            position: 'relative',
            height: 60,
            justifyContent: 'space-around',
            elevation: 5,
            borderRadius: 5,
          },
        }}>       
        <Tab.Screen
          name="Orders"
          component={ScoreScreen}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({color}) => (
              <Icon name="source" color={color} size={40} />
            ),
          }}
        />
          <Tab.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            tabBarLabel: 'Game',
            tabBarIcon: ({color}) => (
              <Icon name="videogame-asset" color={color} size={40} />
            ),
          }}
        />
          <Tab.Screen
          name="AccountTab"
          component={AccountRoutes}
          options={{
            tabBarLabel: 'Conta',
            tabBarAccessibilityLabel: 'Conta',
            tabBarIcon: ({color}) => (
              <Icon name="account-circle" size={40} color={color} />
            ),
          }}
        />
             
      </Tab.Navigator>
  );
}
