import React, { useState } from 'react';
import $ from 'jquery';

const ChangeColorButton = () => {
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    const newColor = color === '#ffffff' ? '#ff6347' : '#ffffff'; // Alternar entre blanco y rojo
    setColor(newColor);
    // Usando jQuery para cambiar el estilo del párrafo
    $('p').css('background-color', newColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Cambiar el color</button>
      <p style={{ backgroundColor: color }}>Este es un párrafo con color de fondo.</p>
    </div>
  );
};

export default ChangeColorButton;
