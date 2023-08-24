import { useState } from 'react';
import Joke from './component/Joke.jsx';
import jokesData from './jokesData.jsx';

const App = () => {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <>{jokeElements}</>;
};

export default App;
