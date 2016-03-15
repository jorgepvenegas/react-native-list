'use strict';

var React = require('react-native');
var {
  View,
  StyleSheet,
  Text,
  ListView
} = React;

var TubeView = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.link.instructions),
    };
  },

  tubeInstructions: function(rowData) {
    return (
      <View style={styles.instruction}>
        <Text style={styles.instructionStep}>
          Step {rowData.step}
        </Text>
        <Text style={styles.instructionContent}>
          {rowData.content}
        </Text>
      </View>
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {this.props.link.excerpt}
          </Text>
        </View>
        <ListView
          automaticallyAdjustContentInsets={false}
          style={styles.instructionsList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.tubeInstructions(rowData)}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#5BC098',
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  instruction: {
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  instructionsList: {
    flexDirection: 'column'
  },
  instructionStep: {
    fontWeight: 'bold',
    color: '#999'
  },
  instructionContent: {
    lineHeight: 20
  }
});

module.exports = TubeView;
