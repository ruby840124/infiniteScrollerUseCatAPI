import React, { useState } from 'react';
import InfiniteList from './InfiniteList';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={state:[],setState:[]};
  }
  render() {
  return (
    <div>
      <div id="topBlock">
        <div className="topText">Cute Cat Photo!!</div>
      </div>
      <div className='App'>
        <InfiniteList />
      </div>
    </div>
  )
}
}

export default App;