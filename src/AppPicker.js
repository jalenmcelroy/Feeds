import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import { IconBar } from './components';
import { togglePicker } from './actions';

const firstIcons = [
  { image: require('./icons/Facebook.png'), appName: 'Facebook' },
  { image: require('./icons/Twitter.png'), appName: 'Twitter' },
  { image: require('./icons/Instagram.png'), appName: 'Instagram' }
];

const secondIcons = [
  { image: require('./icons/Reddit.png'), appName: 'Reddit' },
  { image: require('./icons/Apps.png'), appName: 'Feeds' },
  { image: require('./icons/YouTube.png'), appName: 'YouTube' }
];

class AppPicker extends React.Component {
  render() {
    return (
      <Modal animationType='slide' visible={this.props.visible} transparent>
        <BlurView
          blurType="dark"
          blurAmount={5}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        />
        <View style={{ paddingTop: 20, paddingLeft: 10 }}>
          <TouchableOpacity onPress={this.props.togglePicker}>
            <Image source={require('./icons/Close.png')} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <IconBar style={styles} icons={firstIcons} />
          <IconBar style={styles} icons={secondIcons} />
          <Text style={{ flex: 1 }} />
        </View>
      </Modal>
    );
  }
}

const styles = {
  sectionStyle: {
    iconStyle: {
      height: 50,
      width: 50
    },
    textStyle: {
      color: 'white',
      fontSize: 22
    }
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

const mapStateToProps = ({ apps }) => {
  const { visible } = apps;

  return { visible };
};

export default connect(mapStateToProps, { togglePicker })(AppPicker);
