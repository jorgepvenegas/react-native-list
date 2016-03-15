'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} = React;

var TubeRow = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        underlayColor={'rgba(0, 0, 0, 0.1)'}
        onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image
            source={{uri: this.props.link.image}}
            style={styles.tubeImage}
          />
        <View style={styles.tubeDescription}>
            <Text style={styles.tubeDescriptionExcerpt}>
              {this.props.link.excerpt}
            </Text>
            <Text>
              {this.props.link.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  tubeImage: {
    backgroundColor: '#DDD',
    width: 60,
    height: 60,
    marginRight: 10,
  },
  tubeDescription: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tubeDescriptionExcerpt: {
    fontWeight: 'bold',
    color: '#999'
  },
});

module.exports = TubeRow;
