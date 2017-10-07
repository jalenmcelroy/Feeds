import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Realm from 'realm';
import { togglePicker } from '../actions';
import { RedditSchema, RedditUserSchema } from '../schemas';

class IconSection extends React.Component {
  onButtonPress() {
    this.props.togglePicker();
    let app = null;
    Realm.open({ schema: [RedditSchema, RedditUserSchema] })
      .then(realm => {
        app = realm.objects(this.props.appName);
      })
      .catch(ex => {
        console.log(ex);
      });
    if (app !== null || this.props.appName === 'Feeds') {
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
