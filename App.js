import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from 'components/About';
import AddReview from 'components/AddReview';
import RestaurantInfo from 'components/RestaurantInfo';
import RestaurantList from 'components/RestaurantList';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function component
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RestaurantTabs'
        component={RestaurantTabs}
        options={{ headerShown: false, mode: 'modal' }}
      />
      <Stack.Screen
        name='AddReview'
        component={AddReview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// function component
function RestaurantListStack() {
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

// function component
function RestaurantTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showIcon: true, activeBackgroundColor: '#E6F0FA' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = {
            List: 'list',
            About: 'info-circle',
          }[route.name];
          return <FontAwesome5 color={color} size={size} name={iconName} />;
        },
      })}
    >
      <Tab.Screen name='List' component={RestaurantListStack} />
      <Tab.Screen name='About' component={About} />
    </Tab.Navigator>
  );
}
export default class App extends React.Component {
  state = {
    appIsReady: false,
  };
  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }
  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    await performAPICalls();
    await downloadAssets();

    this.setState({ appIsReady: true }, async () => {
      console.log('hiding splash');
      await SplashScreen.hideAsync();
    });
  };

  async performAPICalls() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  async downloadAssets() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
