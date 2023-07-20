import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import UnitSelector from './components/UnitSelector';
import ConversionInput from './components/ConversionInput';
import ConversionOutput from './components/ConversionOutput';
import { convertUnits } from './utils/converter';
import './App.css';

function App() {
  const [category, setCategory] = useState('Length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // add error message state

  const handleConvert = () => {
    try {
      const result = convertUnits(inputValue, fromUnit, toUnit);
      setOutputValue(result);
      setErrorMessage(''); // clear error message if successful
    } catch (error) {
      setErrorMessage('Cannot convert between these units.'); // set error message if conversion fails
    }
  }

  return (
    <div className="App container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-4">Unit Converter</h1>
      <CategorySelector onSelectCategory={setCategory} />
      <UnitSelector label="From" category={category.toLowerCase()} onSelectUnit={setFromUnit} />
      <UnitSelector label="To" category={category.toLowerCase()} onSelectUnit={setToUnit} />
      <ConversionInput onValueChange={setInputValue} />
      <button className="btn btn-primary mt-3" onClick={handleConvert}>Convert</button>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>} {/* display error message if there is any */}
      <ConversionOutput value={outputValue} />
    </div>
  );
}

export default App;
