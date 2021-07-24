import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePostScreen from '../screens/CreatePost';
import FeedScreen from '../screens/Profile';

export default class TabNavigator extends React.Component{
    render(){
        const Tab=createBottomTabNavigator();
        return(
            <Tab.Navigator screenOptions={({route})=>({
              tabBarIcon:({focused,size,color})=>{
                   let iconName;
                   if(route.name==='Feed'){
                       iconName=focused?'book':'book-outline'
                   }
                   else if(route.name==='CreatePost'){
                       iconName=focused?'create':'create-outline'
                   }
                   return <Ionicons name={iconName} color={color} size={size}/>
              }
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'black'
            }}>
             <Tab.Screen name="Feed" component={FeedScreen}/>
             <Tab.Screen name="CreatePost" component={CreatePostScreen}/>
            </Tab.Navigator>
        )
    }
}