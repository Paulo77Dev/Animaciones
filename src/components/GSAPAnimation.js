import React, { useState } from 'react';
import { gsap } from 'gsap';

const GSAPAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const animateBox = () => {
    setAnimate(!animate);
    if (!animate) {
      gsap.to('.box', {
        duration: 2,
        x: 300,  // Cambia la posición X
        scale: 1.5,  // Aumenta el tamaño
        backgroundColor: 'blue'  // Cambia el color de fondo
      });
    } else {
      gsap.to('.box', {
        duration: 2,
        x: 0,  // Vuelve a la posición inicial
        scale: 1,  // Regresa al tamaño original
        backgroundColor: 'red'  // Vuelve al color original
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
