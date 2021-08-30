import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//SCREENS
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import NotificationScreen from "../Screens/NotificationScreen";
import CartScreen from "../Screens/CartScreen";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarItemStyle : {paddingTop : 10,paddingBottom : 3 ,marginTop : 5, marginBottom : -5}, headerShown: false }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name ="home" color={color} size={25} />
            )
          }}  
           />
        <Tab.Screen 
          name="Explore" 
          component={ExploreScreen}     
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name ="map" color={color} size={25} />
            )
          }}  
           />
        <Tab.Screen 
          name="Notification" 
          component={NotificationScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name ="bell-outline" color={color} size={25} />
            ),
        }}  
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name ="cart-outline" color={color} size={25} />
            ),
        }}  
        />
      </Tab.Navigator>
    );
  }

  export default TabNav;