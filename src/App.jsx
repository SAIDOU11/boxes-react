import React, { useState } from 'react';
import boxes from './boxes.jsx';
import Box from './component/Box.jsx';

const App = () => {
  const [squares, setSquares] = useState(boxes);

  const toggleBoolean = (id) => {
    console.log(id);
  };

  const squareElement = squares.map((square) => {
    return (
      <Box
        toggleBoolean={toggleBoolean}
        id={square.id}
        key={square.id}
        on={square.on}
      />
    );
  });

  return <>{squareElement}</>;
};

export default App;
