import React, { Component,Fragment } from 'react';
import { Provider} from 'react-redux';
import Header from './common/header';
import {GlobalStyle}  from './style.js';
import {IconStyle} from './static/iconfont/iconfont' ;
import store from './store';

class App extends Component {
  render() {
    return (
     
        <Provider store = {store}>
          <Fragment>
            <IconStyle/>
            <GlobalStyle/>
            <Header/>
          </Fragment>
        </Provider>
     

    );
  }
}

export default App;
