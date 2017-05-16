import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Notifications extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: <Image
      source={require('../../../icons/notifications.png')}
      style={styles.iconStyle}
    />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>No New Notifications</Text>
      </View>
    );
  }
}

export { Notifications };
