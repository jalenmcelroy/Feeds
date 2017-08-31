import { TabNavigator } from 'react-navigation';
import {
  Home,
  Trending,
  Messenger,
  Notifications,
  Profile
} from './Pages';

const order = ['Home', 'Trending', 'Messenger', 'Notifications', 'Profile'];

const appRouteConfigs = {
  Home: { screen: Home },
  Trending: { screen: Trending },
  Messenger: { screen: Messenger },
  Notifications: { screen: Notifications },
  Profile: { screen: Profile }
};

const appNavigationConfigs = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    initialRouteName: 'Home',
    activeTintColor: '#3b5998',
    order
  }
};

const FacebookNavigator = TabNavigator(appRouteConfigs, appNavigationConfigs);

export { FacebookNavigator };
