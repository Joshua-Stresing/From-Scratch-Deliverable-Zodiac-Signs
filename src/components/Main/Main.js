import React from 'react';
import './Main.css';
import '../Zodiac/Animal.css';

import Zodiac from '../Zodiac/Zodiac.js';
import background from '../../background.png';
import { zodiac } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} {...sign} />
      ))}
    </main>
  );
}
