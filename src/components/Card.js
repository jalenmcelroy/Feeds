import React from 'react';
import { View, Text } from 'react-native';
import { IconBar, PostInfo } from '.';

class Card extends React.Component {
  render() {
    const { name, time, message, profilePic } = this.props;

    return (
      <View>
        <PostInfo name={name} time={time} profilePic={profilePic} />
        <Text>{message}</Text>
        <IconBar />
      </View>
    );
  }
}

export { Card };
