import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserForm" component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


