import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Image source={require('../../icons/Home-64.png')} style={styles.iconStyle} />
  };

  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Welcome Home</Text>
      </View>
    );
  }
}

export { Home };
