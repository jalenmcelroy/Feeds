import { TabNavigator } from 'react-navigation';
import {
  Home,
  Explore,
  Trending,
  Notifications,
  Profile
} from './Pages';

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
    activeTintColor: '#966842',
    order
  }
};

const InstagramNavigator = TabNavigator(appRouteConfigs, appNavigationConfigs);

export { InstagramNavigator };
