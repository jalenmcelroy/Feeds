import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppsNavigator from './AppsNavigator';
import reducers from './reducers';

class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppsNavigator />
      </Provider>
    );
  }
}

export default App;
