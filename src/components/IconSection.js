import React from 'react';
import { View, Text, Image } from 'react-native';

const IconSection = (props) => {
  const { source, caption } = props;
  const { containerStyle, textStyle, imageStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image
        source={require(source)}
        style={imageStyle}
      />
      <Text style={textStyle}>{caption}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 5,
    fontColor: '#cccccc'
  },
  imageStyle: {
    height: 8,
    width: 8
  }
};

export { IconSection };
