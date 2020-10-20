import React from 'react';
import InfiniteList from './InfiniteList';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={state:[],setState:[]};
  }
  render() {
  return (
    <div className = "main">
      <div className = "topBlock">
        {'Cute Cat <3'}
      </div>
      <div className = 'listBlock'>
        <InfiniteList/>
      </div>
    </div>
  )
  }
}

export default App;