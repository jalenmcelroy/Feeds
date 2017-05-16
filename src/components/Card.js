import React from 'react';
import { View, Text } from 'react-native';
import { IconBar } from './IconBar';
import { PostInfo } from './PostInfo';

class Card extends React.Component {
  render() {
    const { name, time, message, profilePic } = this.props;

    return (
      <View style={styles.containerStyle}>
        <PostInfo name={name} time={time} profilePic={profilePic} />
        <Text style={{ alignSelf: 'stretch' }}>{message}</Text>
        <IconBar />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 0.5
  }
};

export { Card };
