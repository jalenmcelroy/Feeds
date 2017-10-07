import React from 'react';
import { Alert, Linking, WebView, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Realm from 'realm';
import { Header } from '../components';
import { login } from '../actions';
import AppInfo from '../apps/Apps.json';
import { RedditSchema, RedditUserSchema } from '../schemas';

class LoginForm extends React.Component {
  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log('handling');
    console.log(event.url);
    //https://pages.github.com/?state=M25JSUxiZ3M4UWl0alhTbTJ4WDJodUdrRmp5dm5yVjk%3D&code=n0tIQUxB5jEGYS782ITkryDRMGQ
  }

  appLogin() {
    function randomString(length, chars) {
      let result = '';
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    const stateVariable = window.btoa(encodeURIComponent(randomString(32,
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    )));

    const url =
      'https://www.reddit.com/api/v1/authorize.compact' +
      '?client_id=ASPtbTcJanQ8ow' +
      '&response_type=code' +
      `&state=${stateVariable}` +
      '&redirect_uri=https://pages.github.com/' +
      '&duration=permanent' +
      '&scope=identity edit flair history modconfig modflair modlog modposts modwiki ' +
        'mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'
    ;
    const response = Linking.openURL(url).catch(err => console.log('An error occurred', err));
    console.log(response);
    //https://pages.github.com/?state=cjNESkQ1aWk1bjdYa21FSjdNRDF4WkRBS1U1cVV4MDQ%3D&code=wBIrf9CuI1Gq9VAISXb2s969MPs
    const form = new FormData();
    form.append('code', 'wBIrf9CuI1Gq9VAISXb2s969MPs');
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', 'https://pages.github.com/');

    fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + window.btoa('ASPtbTcJanQ8ow:' + '')
      },
      body: form/*
        grant_type:	'authorization_code',
        code: 'DN0Ec0Jw5mkE9H4QU2vy6K2Pa6M',
        redirect_uri: 'https://pages.github.com/'
      }*/
    }).then((response) => console.log(response.json()));
/*
_65
:
access_token
:
"X6LuLNp5CzpFezORwuW_twIaQhQ"
expires_in
:
3600
refresh_token
:
"59286344-h4NvBeTaDcZOhx5FEnSCRoE17F0"
scope
:
"edit flmodwirt save submit subscribe vote wikiedit wikiread"
token_type
:
"bearer"
*/
    /*console.log(nonce);

    fetch('https://api.twitter.com/oauth/request_token', {
      method: 'POST',
      headers: {
        Oauth: {
          oauth_callback: 'http%3A%2F%2Flocalhost%2Fsign-in-with-twitter%2F',
          oauth_nonce: nonce,
          oauth_consumer_key: 'yJBut4W6EM8xp5T1mvRrxABE2',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_version: '1.0'
        }
      }
    });

    login({
      appName: this.state.appName,
      email: this.refs.email._lastNativeText,
      password: this.refs.password._lastNativeText
    });*/
  }

  onNavigationStateChange(navState) {
    console.log(navState);
    console.log(this);
    if (navState.url.startsWith(redirectUri) && !tokenReceived && !navState.loading) {
      const params = navState.url.substring(redirectUri.length + 1, navState.url.length)
                      .split('&');
      if (navState.url.indexOf('error') === -1) {
        const code = params[1].substring(5, params[1].length);
        console.log(code);
        const form = new FormData();
        form.append('code', code);
        form.append('grant_type', 'authorization_code');
        form.append('redirect_uri', redirectUri);
        fetch('https://www.reddit.com/api/v1/access_token', {
          method: 'POST',
          headers: {
            Authorization: `Basic ${window.btoa('ASPtbTcJanQ8ow:')}`
          },
          body: form
        }).then(response => response.json()).then(response => {
          if (response.error == null) {
            console.log(response);
            fetch('https://oauth.reddit.com/api/v1/me', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${response.access_token}`
              }
            }).then(user => user.json()).then(user => {
              console.log(user);
              Realm.open({ schema: [RedditSchema, RedditUserSchema] })
                .then(realm => {
                  let redditor = null;
                  let reddit = null;
                  try {
                    redditor = realm.objects('RedditUser').filtered(`user_name = ${user.name}`);
                  } catch (ex) {
                    console.log(ex);
                  } finally {
                    realm.write(() => {
                      if (redditor !== null) {
                        redditor.access_token = user.access_token;
                        redditor.refresh_token = user.refresh_token;
                      } else {
                        redditor = realm.create('RedditUser', {
                          user_name: user.name,
                          access_token: response.access_token,
                          refresh_token: response.refresh_token
                        });
                      }
                    });
                  }
                  reddit = realm.object('Reddit');
                  realm.write(() => {
                    if (reddit !== null) {
                      reddit.current_user = redditor;
                    } else {
                      reddit = realm.create('Reddit', {
                        current_user: redditor
                      });
                    }
                  });
                });
            });
            tokenReceived = true;
          } else {
            Alert.alert(
              'Error authenticating',
              'An error occured. Please try again',
              [{ text: 'OK', onPress: () => this.forceUpdate() }],
              { cancelable: false }
            );
          }
        });
      } else {
        Alert.alert(
          'Error authenticating',
          'An error occured. Please try again',
          [{ text: 'OK', onPress: () => this.forceUpdate() }],
          { cancelable: false }
        );
      }
    }
  }
    /*const url = window.//avState.title;
    console.log(url);*/

  render() {
    const appName = this.props.navigation.state.params.appName;
    function randomString(length, chars) {
      let result = '';
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    const stateVariable = window.btoa(encodeURIComponent(randomString(32,
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    )));
    const url =
      'https://www.reddit.com/api/v1/authorize.compact' +
      '?client_id=ASPtbTcJanQ8ow' +
      '&response_type=code' +
      `&state=${stateVariable}` +
      `&redirect_uri=${redirectUri}` +
      '&duration=permanent' +
      '&scope=identity edit flair history modconfig modflair modlog modposts modwiki ' +
        'mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'
    ;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='light-content'
        />
        <Header
          title={AppInfo.Reddit.name}
          backgroundColor='black'
        />
        <WebView
          automaticallyAdjustContentInsets
          source={{ uri: url }}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          startInLoadingState={false}
          //style={{ height: 100, width: 100 }}
          //onLoad={function loaded() { .title = document.URL }}
        />
      </View>
    );
  }
}

const redirectUri = 'https://pages.github.com/';

let tokenReceived = false;

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30
  },
  inputStyle: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    backgroundColor: 'white'
  }
};

const mapStateToProps = ({ apps }) => {
  const { navigator } = apps;

  return { navigator };
};

export default connect(mapStateToProps, {})(LoginForm);
