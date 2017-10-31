import React from 'react';

import Card from './Card';

const List = ({ title, body, children, state }) => {
  const Cards = children.map((nodeId) => {
    const { title, body } = state.nodes[nodeId];

    return <Card title={title} body={body} key={nodeId}/>
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <ul>{Cards}</ul>
    </div>
  );
};

export default List;
