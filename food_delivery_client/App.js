import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

//Tab Navigator
import TabNav from "./src/Components/TabNav";

//Screens
import SplashScreen from './src/Screens/SplashScreen';
import Login from "./src/Screens/Login";
import Register from './src/Screens/Register';


const Stack = createStackNavigator();

const AppStack = () => {
  return(
    <Stack.Navigator initialRouteName="Splash"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Splash" 
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login" 
        component={Login}
        screenOptions={
          {
            headerShown : false
          }
        }
      />
      <Stack.Screen
        name="Register" 
        component={Register}
        screenOptions={
          {
            headerShown : false
          }
        }
      />
      <Stack.Screen 
        name="Tab" 
        component={TabNav} 
        options={{
          title: 'Xhale',
          headerStyle : 'float',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () =>  {
  return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
  );
}

export default App;

