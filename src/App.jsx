import { useState } from 'react';
// main app component.
const App = () => {
  const [inputValue, setInputValue] = useState('Howdy');

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        <h2>Hello World!</h2>
        <input
          type="text"
          name="data"
          id="data"
          placeholder="Enter something"
          onChange={handleOnChange}
        />
        <br />
        {inputValue}
      </div>
    </>
  );
};

export default App;
