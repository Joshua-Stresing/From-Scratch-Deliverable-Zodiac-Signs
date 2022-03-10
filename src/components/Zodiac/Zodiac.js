import React from 'react';
import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <img alt={name} src={`${process.env.PUBLIC_URL}/pics/${name}.png`} />
      <h1 className="name">{name}</h1>
      <span>{dates}</span>
    </div>
  );
}
