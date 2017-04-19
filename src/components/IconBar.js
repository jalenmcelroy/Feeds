import React from 'react';
import { View } from 'react-native';
import IconSection from './IconSection';

const IconBar = () => {
  return (
    <View>
      <IconSection source='../icons/Like.png' caption='Like' />
      <IconSection source='../icons/Comment.png' caption='Comment' />
      <IconSection source='../icons/Share.png' caption='Share' />
    </View>
  );
};

export { IconBar };
