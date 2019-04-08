import React, { Component,Fragment } from 'react';
import Header from './common/header';
import {GlobalStyle}  from './style.js';
import {IconStyle} from './static/iconfont/iconfont' ;
class App extends Component {
  render() {
    return (
      <Fragment>
        <IconStyle/>
        <GlobalStyle/>
        <Header/>
      </Fragment>

    );
  }
}

export default App;
