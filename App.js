import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';  // Assuming your main page is in this file
import SpeechToText from './SpeechToTextPage';  // The speech-to-text page you created

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dyslexia">
        <Stack.Screen name="Dyslexia" component={MainPage} />
        <Stack.Screen name="SpeechToText" component={SpeechToText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
