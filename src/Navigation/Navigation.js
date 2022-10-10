import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: 'Peliculas' }} />
      <Tab.Screen name="contact" component={Contact} options={{ title: 'Series' }} />
      <Tab.Screen name="about" component={About} options={{ title: 'About' }} />
    </Tab.Navigator>
  );
}
