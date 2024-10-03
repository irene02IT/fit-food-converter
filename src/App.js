import React, { useState } from 'react';
import ConvertitoreAlimenti from './components/ConvertitoreAlimenti';
import ConvertitoreCrudoCotto from './components/ConvertitoreCrudoCotto';
import './App.css';

function App() {
  const [showCrudoCotto, setShowCrudoCotto] = useState(true);
  const [showConvertitoreAlimenti, setShowConvertitoreAlimenti] = useState(false);

  const handleButtonClick = () => {
    //toggle one component at a time
    setShowCrudoCotto(!showCrudoCotto);
    setShowConvertitoreAlimenti(!showConvertitoreAlimenti);
  };
  const logo = 'logo192.png';
  return (
    <div className="App">
      <div className='header'>
        <img src={logo} className='logo' alt='logo' />
        <h1>Fit food converter</h1>
        
        <button className='toggle-converter' onClick={handleButtonClick}>
          {showCrudoCotto ? 'Alimenti' : 'Da crudo a cotto'}
        </button>
      
        {showCrudoCotto && <ConvertitoreCrudoCotto />}
        {showConvertitoreAlimenti && <ConvertitoreAlimenti />}
      </div>
      <footer>
          <p><a href='https://github.com/irene02IT/fit-food-converter'>IE © 2024</a></p>
        </footer>
    </div>
  );
}

export default App;