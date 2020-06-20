/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MyStack from "./src/navigation/navigation";
import { setTopLevelNavigator } from './src/navigation/navigatorRef'
import { Provider } from 'react-redux'
import store from './src/store'
const App: () => React$Node = () => {
  return (
    <>
        <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <NavigationContainer ref={navigatorRef => {
                    setTopLevelNavigator(navigatorRef);//设置顶层导航
                }}>
                    <MyStack></MyStack>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container:{
     flex: 1
    }
});

export default App;
