import React from 'react';
import $ from 'jquery';

const ToggleFadeButton = () => {
  const toggleVisibility = () => {
    $('#toggle-paragraph').fadeToggle();
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Mostrar/Ocultar Párrafo</button>
      <p id="toggle-paragraph" style={{ display: 'none' }}>
        Este párrafo aparece y desaparece con fade.
      </p>
    </div>
  );
};

export default ToggleFadeButton;
