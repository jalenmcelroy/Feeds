import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { togglePicker } from '../actions';

class Header extends React.Component {
  render() {
    const { title, eventIcon, event, backgroundColor } = this.props;
    const { containerStyle, iconStyle, titleStyle } = styles;

    return (
      <View style={[containerStyle, { backgroundColor }]}>
        <TouchableOpacity onPress={this.props.togglePicker}>
          <Image
            source={require('../icons/Apps.png')}
            style={[iconStyle, { alignSelf: 'flex-start' }]}
          />
        </TouchableOpacity>
        <Text style={titleStyle}>{title}</Text>
        <TouchableOpacity >
          <Image
            source={''}
            style={[iconStyle, { alignSelf: 'flex-end' }]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  titleStyle: {
    fontSize: 22,
    color: 'white'
  }
};

export default connect(null, { togglePicker })(Header);
