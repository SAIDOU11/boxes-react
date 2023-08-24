import { useState } from 'react';

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    console.log(isShown);
    setIsShown((prevState) => !prevState);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button className="btn" onClick={toggle}>
        Show Punchline
      </button>
      <hr />
    </div>
  );
};

export default Joke;
