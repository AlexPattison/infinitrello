import React from 'react';

const Card = ({ title, body }) => {
  return (
    <li>
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  );
};

export default Card;
