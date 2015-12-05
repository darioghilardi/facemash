'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} = React;

var messagesTab = React.createClass({
  componentWillMount: function() {
    fetch('https://raw.githubusercontent.com/rynclark/facemash/step-five/rest/messages.json')
      .then((res) => res.json())
      .then((resData) => this.updateDataSource(resData));
  },
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  },
  updateDataSource: function(data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    })
  },
  renderRow: function(person) {
    return (
      <View>
        <Text>{ person.user.firstName } { person.user.lastName }</Text>
      </View>
    );
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

module.exports = messagesTab;
