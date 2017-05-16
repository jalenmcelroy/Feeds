import React from 'react';
import { View } from 'react-native';
import IconSection from './IconSection';

const IconBar = (props) => {
  const { sectionStyle, containerStyle } = props.style;
  const { icons, navigator } = props;
  console.log(navigator);

  return (
    <View style={containerStyle}>
      <IconSection
        style={sectionStyle}
        source={icons[0].image}
        appName={icons[0].appName}
        navigator={navigator}
      />
      <IconSection
        style={sectionStyle}
        source={icons[1].image}
        appName={icons[1].appName}
        navigator={navigator}
      />
      <IconSection
        style={sectionStyle}
        source={icons[2].image}
        appName={icons[2].appName}
        navigator={navigator}
      />
    </View>
  );
};


export { IconBar };
