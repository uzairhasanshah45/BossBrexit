import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../Features/StartScreen/StartScreen';
import Home from '../Features/Home/Home';
import WhatIsBrexit from '../Features/WhatIsBrexit/WhatIsBrexit';
import WhyIsBrexit from '../Features/WhyIsBrexit/WhyIsBrexit';
import KeyPoints from '../Features/KeyPoints/KeyPoints';
import Benifits from '../Features/Benifits/Benifits';
import Quiz from '../Features/Quiz/Quiz';
import SuccessScreen from '../Features/SuccessScreen/SuccessScreen'
import FailedScreen from '../Features/FailedScreen/FailedScreen'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="What is brexit"
          component={WhatIsBrexit}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Why is brexit"
          component={WhyIsBrexit}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="Key Points of deal"
          component={KeyPoints}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Benefits of brexit"
          component={Benifits}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz about brexit"
          component={Quiz}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
