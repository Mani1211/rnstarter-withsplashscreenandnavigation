import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Welcome to React Native!!</Text>
    </SafeAreaView>
  );
};

export default App;
