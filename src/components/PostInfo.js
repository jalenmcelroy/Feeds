import React from 'react';
import { View, Text, Image } from 'react-native';

const PostInfo = (props) => {
  const { profilePic, name, time } = props;

  return (
    <View>
      <Image src={require(profilePic)} />
      <View>
        <Text>{name}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export { PostInfo };
