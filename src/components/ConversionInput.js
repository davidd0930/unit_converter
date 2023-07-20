import React from 'react';

function ConversionInput({ onValueChange }) {
  return (
    <div className="form-group">
      <label htmlFor="value">Value to convert:</label> {/* add label */}
      <input id="value" className="form-control" type="number" onChange={(e) => onValueChange(e.target.value)} /> {/* link label */}
    </div>
  );
}

export default ConversionInput;
