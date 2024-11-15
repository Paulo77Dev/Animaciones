import React, { useState } from 'react';
import { gsap } from 'gsap';

const GSAPAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const animateBox = () => {
    setAnimate(!animate);
    if (!animate) {
      gsap.to('.box', {
        duration: 2,
        x: 300,  // Muda a posição X
        scale: 1.5,  // Aumenta o tamanho
        backgroundColor: 'blue'  // Muda a cor de fundo
      });
    } else {
      gsap.to('.box', {
        duration: 2,
        x: 0,  // Volta para a posição inicial
        scale: 1,  // Retorna ao tamanho original
        backgroundColor: 'red'  // Retorna à cor original
      });
    }
  };

  return (
    <div>
      <button onClick={animateBox}>Animar</button>
      <div className="box" style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />
    </div>
  );
};

export default GSAPAnimation;
