import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from 'components/About';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantList from 'components/RestaurantList';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showIcon: true }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          const iconName = {
            List: 'list',
            About: 'info-circle',
          }[route.name];
          return <FontAwesome5 color={color} size={size} name={iconName} />;
        },
      })}
    >
      <Tab.Screen name='List' component={MyStack} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
