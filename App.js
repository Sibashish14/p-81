import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Navigation.js/DrawerNavigator';

export default function App(){
    return(
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
  }
