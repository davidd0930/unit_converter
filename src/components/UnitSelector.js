import React from 'react';
import convert from 'convert-units';

function UnitSelector({ category, onSelectUnit, label }) { // add label prop
  const units = convert().possibilities(category);

  return (
    <div className="form-group">
      <label htmlFor={label}>{label} unit:</label> {/* use label prop */}
      <select id={label} className="form-control" onChange={(e) => onSelectUnit(e.target.value)}> {/* link label */}
        {units.map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
  );
}

export default UnitSelector;
