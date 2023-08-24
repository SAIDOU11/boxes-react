import { useState } from 'react';

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    console.log(isShown);
    setIsShown((prevState) => !prevState);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p className="punchline">{props.punchline}</p>}

      <button onClick={toggleShown} className="btn">
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>

      <hr />
    </div>
  );
};

export default Joke;
