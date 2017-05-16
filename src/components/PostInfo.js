import React from 'react';
import { View, Text, Image } from 'react-native';

const PostInfo = (props) => {
  const { profilePic, name, time } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={profilePic} style={{ height: 50, width: 50 }} />
      <View>
        <Text>{name}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export { PostInfo };
