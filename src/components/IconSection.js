import React from 'react';
import { Text, Image, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { togglePicker } from '../actions';

class IconSection extends React.Component {
  onButtonPress() {
    this.props.togglePicker();
    if (AsyncStorage.getItem(this.props.appName) === true) {
      this.props.navigator.navigate(this.props.appName);
    } else {
      this.props.navigator.navigate('Login', { appName: this.props.appName });
    }
  }

  render() {
    const { source, appName } = this.props;
    const { textStyle, iconStyle } = this.props.style;

    return (
      <View style={containerStyle}>
        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
          <Image
            source={source}
            style={iconStyle}
          />
        </TouchableOpacity>
        <Text style={textStyle}>{appName}</Text>
      </View>
    );
  }

}

/*const styles = {
  textStyle: {
    fontSize: 10
  },
  imageStyle: {
    height: 20,
    width: 20
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  }
};*/

const containerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
};

const mapStateToProps = ({ apps }) => {
  const { navigator } = apps;

  return { navigator };
};

export default connect(mapStateToProps, { togglePicker })(IconSection);
