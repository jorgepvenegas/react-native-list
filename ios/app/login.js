/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TestTubes = require('./test-tubes');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} = React;

var Login = React.createClass({
  getInitialState: function() {
    return {
      isLogged: false
    }
  },

  loginButton: function() {
    // Do a call to a REST service and check the credentials
    this.setState({
      isLogged: true
    });
  },

  sendCode: function() {
    // Do a call to a REST service and check the code
    this.props.navigator.push({
      title: 'Tests',
      component: TestTubes
    });
  },

  insertCodeView: function(){
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={styles.logo}
            source={{uri: 'http://cdn.shopify.com/s/files/1/0208/9228/t/8/assets/ubiome.png'}}
          />
        <Text style={styles.successMessage}>
            Welcome John!
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(kitcode) => this.setState({kitcode})}
            value={this.state.kitcode}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor='#3D8ABB'
            onPress={() => this.sendCode()}>
            <Text style={styles.buttonText}>
              Send Code
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  render: function() {
    if(this.state.isLogged){
      return this.insertCodeView();
    }
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={styles.logo}
            source={{uri: 'http://cdn.shopify.com/s/files/1/0208/9228/t/8/assets/ubiome.png'}}
          />
          <Text style={styles.textLabel}>
            Login
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder='Username'
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor='#3D8ABB'
            onPress={() => this.loginButton()}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
    alignItems: 'center'
  },
  form: {
    marginTop:100,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 290,
    borderColor: '#CCC',
    color: '#555',
    borderWidth: 0.5
  },
  button: {
    backgroundColor: '#449BD2',
    paddingTop: 10,
    paddingBottom: 10,
    width: 290
  },
  textLabel: {
    color: '#555',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },
  logo: {
    width: 250,
    height: 156,
    marginBottom: 20
  }
});

module.exports = Login;
