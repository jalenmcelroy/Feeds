import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Trending extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trending',
    tabBarIcon: <Image source={require('../../icons/Bullish-50.png')} style={styles.iconStyle} />
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

export { Trending };
