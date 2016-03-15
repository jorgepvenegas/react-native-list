/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./app/login');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var demoApp = React.createClass({
  getInitialState: function() {
    return {
      navigationBarHidden: true
    }
  },

  render: function() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          component: Login,
          title: 'LoginToList'
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

AppRegistry.registerComponent('demoApp', () => demoApp);
