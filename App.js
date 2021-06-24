import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={{fontFamily: 'PlaylistScript', color: '#fff'}}>
        Welcome to React Native!!
      </Text>
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
};

export default App;
