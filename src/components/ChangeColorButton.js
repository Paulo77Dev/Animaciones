import React, { useState } from 'react';
import $ from 'jquery';

const ChangeColorButton = () => {
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    const newColor = color === '#ffffff' ? '#ff6347' : '#ffffff'; // Alterna entre branco e vermelho
    setColor(newColor);
    // Usando jQuery para alterar o estilo do parágrafo
    $('p').css('background-color', newColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Mudar Cor</button>
      <p style={{ backgroundColor: color }}>Este é um parágrafo com cor de fundo.</p>
    </div>
  );
};

export default ChangeColorButton;
