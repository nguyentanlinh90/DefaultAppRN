import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../features/splash/containers/SplashContainer';

const Stack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const prevGetState = Stack.router.getStateForAction;
Stack.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return prevGetState(action, state);
};

export default AppContainer = createAppContainer(Stack);
