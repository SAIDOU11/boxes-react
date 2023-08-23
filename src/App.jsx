import { useState } from 'react';
import boxes from './boxes.jsx';
import Box from './component/Box.jsx';

const App = () => {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElement = squares.map((square) => (
    <Box
      toggle={() => toggle(square.id)}
      id={square.id}
      on={square.on}
      key={square.id}
    />
  ));

  return <>{squareElement}</>;
};

export default App;
