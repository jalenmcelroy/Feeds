import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import { Header } from '../../../components';
import AppPicker from '../../../AppPicker';
import { Instagram } from '../../Apps.json';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Image source={require('../../../icons/Home-64.png')} style={styles.iconStyle} />
  };

  render() {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='light-content'
        />
        <Header
          title={Instagram.name}
          backgroundColor={Instagram.color}
        />
        <View style={viewStyle}>
          <Text style={textStyle}>Instagram Home</Text>
        </View>
        <AppPicker />
      </View>
    );
  }
}

export { Home };
