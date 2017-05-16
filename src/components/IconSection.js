import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { togglePicker } from '../actions';

class IconSection extends React.Component {
  onButtonPress() {
    console.log(this.props.navigator);
    this.props.togglePicker();
    this.props.navigator.navigate(this.props.appName);
  }

  render() {
    const { source, appName } = this.props;
    const { textStyle, iconStyle } = this.props.style;

    return (
      <TouchableOpacity style={containerStyle} onPress={this.onButtonPress.bind(this)}>
        <Image
          source={source}
          style={iconStyle}
        />
        <Text style={textStyle}>{appName}</Text>
      </TouchableOpacity>
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
