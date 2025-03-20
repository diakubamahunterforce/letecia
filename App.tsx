import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import home from './screens/home';
import  remote  from  './screens/remote';
import Voice from './screens/voice';
const Tab = createBottomTabNavigator();



function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function VoiceScreen() {
  return (
    <View>
      <Text>Voice Control Screen</Text>
    </View>
  );
}

function RemoteScreen() {
  return (
    <View>
      <Text>Remote Control Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:true,

          tabBarStyle:{position:'absolute',
            bottom:14, 
            left:14,
            right:14,
            elevation:0,
            height :60,
            borderRadius:4,
            backgroundColor:"#black"



          },

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; 
            } else if (route.name === 'Voice') {
              iconName = 'mic'; 
            } else if (route.name === 'Remote') {
              iconName = 'tv'; 
            } else if (route.name === 'Settings') {
              iconName = 'settings'; 
            }

            
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={ home} />
        <Tab.Screen name="Voice" component={Voice} />
        <Tab.Screen name="Remote" component={remote} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
