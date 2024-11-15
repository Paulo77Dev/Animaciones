import React, { useState } from 'react';
import anime from 'animejs';

const AnimaciónAnimeJS = () => {
  const [items] = useState(['Ítem 1', 'Ítem 2', 'Ítem 3']);
  
  const animarItems = () => {
    anime({
      targets: '.item',
      translateX: 250,
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),  // Retraso de 200ms entre los ítems
      elasticity: 400  // Efecto de rebote
    });
  };

  return (
    <div>
      <button onClick={animarItems}>Animar Ítems</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimaciónAnimeJS;
