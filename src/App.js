import React from 'react';
import ChangeColorButton from './components/ChangeColorButton';
import ToggleFadeButton from './components/ToggleFadeButton';
import GSAPAnimation from './components/GSAPAnimation';
import AnimeJSAnimation from './components/AnimeJSAnimation';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Manipulação e Animações com React</h1>
      <ChangeColorButton />
      <ToggleFadeButton />
      <GSAPAnimation />
      <AnimeJSAnimation />
    </div>
  );
};

export default App;
