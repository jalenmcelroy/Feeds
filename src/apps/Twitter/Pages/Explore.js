import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Explore extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: <Image source={require('../../../icons/Search-50.png')} style={styles.iconStyle} />
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

export { Explore };
