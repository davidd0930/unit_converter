import React from 'react';

function ConversionOutput({ value }) {
  return (
    <h2 className="mt-3">Result: <span className="text-success">{value}</span></h2>
  );
}

export default ConversionOutput;
