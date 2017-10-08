import React from 'react';

import List from './List';

const Board = ({ title, body, children, state }) => {
  const Lists = children.map((nodeId) => {
    const { title, body, children } = state.nodes[nodeId];

    return <List title={title} body={body} children={children} state={state} />
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <ul>{Lists}</ul>
    </div>
  );
};

export default Board;
