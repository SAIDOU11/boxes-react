import { useState } from 'react';

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent',
  };

  return (
    <div
      onClick={() => props.toggleBoolean(props.id)}
      style={styles}
      className="square"
    ></div>
  );
};

export default Box;
