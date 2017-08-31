import { StackNavigator } from 'react-navigation';
import {
  FeedsNavigator,
  FacebookNavigator,
  RedditNavigator,
  TwitterNavigator,
  YouTubeNavigator,
  InstagramNavigator
} from './apps';
import { LoginForm } from './components';


const routeConfigs = {
  Feeds: { screen: FeedsNavigator },
  Facebook: { screen: FacebookNavigator },
  Reddit: { screen: RedditNavigator },
  Twitter: { screen: TwitterNavigator },
  YouTube: { screen: YouTubeNavigator },
  Instagram: { screen: InstagramNavigator },
  Login: { screen: LoginForm }
};

const navigationConfigs = {
  initialRouteName: 'Feeds',
  mode: 'modal',
  headerMode: 'none'
};

const AppsNavigator = StackNavigator(routeConfigs, navigationConfigs);

export default AppsNavigator;
