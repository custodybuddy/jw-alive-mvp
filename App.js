import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import CollectionScreen from './screens/CollectionScreen';
import BattleScreen from './screens/BattleScreen';
import {AppProvider} from './utils/AppContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapMain" component={MapScreen} options={{title: 'Map'}} />
    </Stack.Navigator>
  );
}

function CollectionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CollectionMain" component={CollectionScreen} options={{title: 'Collection'}} />
    </Stack.Navigator>
  );
}

function BattleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BattleMain" component={BattleScreen} options={{title: 'Battle'}} />
    </Stack.Navigator>
  );
}

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0F1822',
  },
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer theme={navigationTheme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#F6C90E',
            tabBarInactiveTintColor: '#9BA4B4',
            tabBarStyle: {
              backgroundColor: '#1B2A3D',
              borderTopColor: '#0F1822',
            },
          }}
        >
          <Tab.Screen name="Map" component={MapStack} />
          <Tab.Screen name="Collection" component={CollectionStack} />
          <Tab.Screen name="Battle" component={BattleStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
