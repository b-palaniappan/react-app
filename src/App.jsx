import { useEffect, useState } from 'react';
// main app component.
const App = () => {
  const [inputValue, setInputValue] = useState('Howdy');
  const [refresh, setRefresh] = useState(false);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log('Hello World');
  });

  return (
    <>
      <div className="container mx-auto font-sans">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                React
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="Your Message Here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="alert py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{inputValue}</span>
        </div>
        <div className="py-4">
          <button
            className="btn btn-primary"
            onClick={() => setRefresh(!refresh)}
          >
            Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
