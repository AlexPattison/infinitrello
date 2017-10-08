import React, { Component } from 'react';

import Board from './Board';
import state from '../assets/seed-data';

const { title, body, children } = state.nodes[1];

class App extends Component {
  render() {
    return (
      <div className="App">
        Infinitrello
        <Board title={title} body={body} children={children} state={state}/>
      </div>
    );
  }
}

export default App;
