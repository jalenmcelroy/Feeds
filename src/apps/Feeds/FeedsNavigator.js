import React from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { initializeNavigator } from '../../actions/AppsActions';
import {
  Home,
  Explore,
  Trending,
  Notifications,
  Profile
} from './Pages';

class FeedsNavigator extends React.Component {
  componentDidMount() {
    this.props.initializeNavigator(this.props.navigation);
  }

  render() {
    return <Navigator />;
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
    activeTintColor: '#008000',
    order
  }
};

const Navigator = TabNavigator(appRouteConfigs, appNavigationConfigs);

export default connect(null, { initializeNavigator })(FeedsNavigator);
