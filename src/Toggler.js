import React from 'react';

const Toggler = ({ onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>Select Language</button>
    </div>
  );
};

export default Toggler;
