import React,{useEffect,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './Screens/Signup/SignUp';
import SignUpForm from './Screens/Signup/SignUpForm';
import LoginEmail from './Screens/Login/LoginEmail';
import Main from './Screens/Main/Main';

export type RootStackParamList = {
  SignUp: undefined,
  SignUpForm: undefined;
  LoginEmail: undefined,
  Main:undefined,
};
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
          <Stack.Screen name="LoginEmail" component={LoginEmail} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
   
  )
}