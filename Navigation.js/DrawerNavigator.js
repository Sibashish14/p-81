import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/Profile';

export default class DrawerNavigator extends React.Component{
    render(){
        const Drawer=createDrawerNavigator();
        return(
            <Drawer.Navigator>
                <Drawer.Screen name="Tab" component={TabNavigator}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
            </Drawer.Navigator>
        )
    }
}