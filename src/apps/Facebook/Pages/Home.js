import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import { Header } from '../../../components';
import AppPicker from '../../../AppPicker';
import { Facebook } from '../../Apps.json';

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
          title={Facebook.name}
          backgroundColor={Facebook.color}
        />
        <View style={viewStyle}>
          <Text style={textStyle}>Facebook Home</Text>
        </View>
        <AppPicker />
      </View>
    );
  }
}

export { Home };
