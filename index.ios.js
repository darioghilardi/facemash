/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBarIOS,
} = React;

var FaceMashTab = require('./tabs/FaceMash');
var MessagesTab = require('./tabs/Messages');

var FaceMash = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'faceMash'
    }
  },
  changeTab(tabName) {
    StatusBarIOS.setStyle(tabName === 'faceMash' ? 1 : 0);
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Facemash"
          icon={ require('./facemash.png') }
          onPress={ () => this.changeTab('faceMash') }
          selected={ this.state.selectedTab === 'faceMash' }>
          <FaceMashTab />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Messages"
          icon={ require('./messages.png') }
          onPress={ () => this.changeTab('messages') }
          selected={ this.state.selectedTab === 'messages' }>
          <MessagesTab />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Settings"
          icon={ require('./settings.png') }
          onPress={ () => this.changeTab('settings') }
          selected={ this.state.selectedTab === 'settings' }>
          <View style={ styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('FaceMash', () => FaceMash);
