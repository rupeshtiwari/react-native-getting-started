import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantList from 'components/RestaurantList';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={RestaurantList}
      />
      <Stack.Screen
        options={{
          title: 'Restaurant Info',
          headerStyle: {
            backgroundColor: '#0066CC',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            color: '#FFF',
          },
        }}
        name='Info'
        component={RestaurantInfo}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
