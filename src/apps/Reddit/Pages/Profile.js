import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Image source={require('../../../icons/User-50.png')} style={styles.iconStyle} />
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

export { Profile };
