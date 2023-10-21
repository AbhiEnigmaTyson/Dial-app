import React,{useEffect,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './Screens/Signup/SignUp';
import SignUpForm from './Screens/Signup/SignUpForm';
import LoginEmail from './Screens/Login/LoginEmail';
import Main from './Screens/Main/Main';
import Users from './Screens/OnBoarding/Users';
import Workspace from './Screens/OnBoarding/workspace';

export type RootStackParamList = {
  SignUp: undefined,
  SignUpForm: undefined;
  LoginEmail: undefined,
  Main:undefined,
  Users:undefined,
  Workspace:undefined,
};
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Workspace" component={Workspace} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
          <Stack.Screen name="SignUp" component={SignUp} />
          
          <Stack.Screen name="LoginEmail" component={LoginEmail} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Users" component={Users} />
          
        </Stack.Navigator>
      </NavigationContainer>
   
  )
}