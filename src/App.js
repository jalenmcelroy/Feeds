import { TabNavigator } from 'react-navigation';
import {
  Home,
  Explore,
  Trending,
  Notifications,
  Profile
} from './apps/Feeds';

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
