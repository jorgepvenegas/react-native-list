/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TubeRow = require('../app/tube-row');
var TubeView = require('../app/tube-view');

var links = require('../mocks/data');

var {
  StyleSheet,
  ListView,
  View
} = React;

var TestTubes = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

    return {
      links: ds.cloneWithRows(links),
      navigationBarHidden: false
    };
  },

  selectLink: function(link) {
    this.props.navigator.push({
      title: 'Test Instructions',
      component: TubeView,
      passProps: {link},
    });
  },

  renderRow: function(link) {
    return (
      <TubeRow
        key={link.id}
        onSelect={() => this.selectLink(link)}
        link={link}
      />
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.links}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

module.exports = TestTubes;
