import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Messenger extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Messenger',
    tabBarIcon: <Image source={require('../../../icons/messenger.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Message Friends</Text>
      </View>
    );
  }
}

export { Messenger };
