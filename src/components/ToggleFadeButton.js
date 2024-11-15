import React from 'react';
import $ from 'jquery';

const ToggleFadeButton = () => {
  const toggleVisibility = () => {
    $('#toggle-paragraph').fadeToggle();
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Mostrar/Ocultar Parágrafo</button>
      <p id="toggle-paragraph" style={{ display: 'none' }}>
        Este parágrafo aparece e desaparece com fade.
      </p>
    </div>
  );
};

export default ToggleFadeButton;
