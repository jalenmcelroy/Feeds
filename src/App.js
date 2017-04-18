import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, Image } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 28,
    alignSelf: 'center'
  },
  viewStyle: {
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  iconStyle: {
    tintColor: '#999999',
    height: 26,
    width: 26
  }
};

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Image source={require('./icons/Home-64.png')} style={styles.iconStyle} />

  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Welcome Home</Text>
      </View>
    );
  }
}

class Explore extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: <Image source={require('./icons/Search-50.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Come Explore</Text>
      </View>
    );
  }
}

class Trending extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trending',
    tabBarIcon: <Image source={require('./icons/Bullish-50.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Today's Trends</Text>
      </View>
    );
  }
}

class Notifications extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: <Image source={require('./icons/notifications.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>No New Notifications</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Image source={require('./icons/User-50.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Create A Profile</Text>
      </View>
    );
  }
}

const order = ['Home', 'Explore', 'Trending', 'Notifications', 'Profile'];

const appRouteConfigs = {
  Home: { screen: Home },
  Explore: { screen: Explore },
  Trending: { screen: Trending },
  Notifications: { screen: Notifications },
  Profile: { screen: Profile }
};

const appNavigationConfigs = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    initialRouteName: 'Home',
    order
  }
};

const App = TabNavigator(appRouteConfigs, appNavigationConfigs);

export default App;
