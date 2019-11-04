

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './routes/index';
import Login from './pages/Login';
import { Provider } from 'react-redux'
import configureStore from './redux/store'
const store = configureStore()


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
});

export default App;
