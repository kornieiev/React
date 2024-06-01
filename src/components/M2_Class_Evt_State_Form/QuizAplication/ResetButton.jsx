import React from 'react';

export default function ResetButton({ resetFilter }) {
  return (
    <>
      <button type="button" onClick={resetFilter}>
        ResetButton
      </button>
    </>
  );
}
