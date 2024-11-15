import React, { useState } from 'react';
import anime from 'animejs';

const AnimeJSAnimation = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
  const animateItems = () => {
    anime({
      targets: '.item',
      translateX: 250,
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),  // Delay de 200ms entre os itens
      elasticity: 400  // Efeito de rebote
    });
  };

  return (
    <div>
      <button onClick={animateItems}>Animar Itens</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeJSAnimation;