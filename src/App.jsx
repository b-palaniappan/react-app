import UserComponent from './components/UserComponent';
import SampleComponent from './components/SampleComponent';

// main app component.
const App = () => {
  return (
    <>
      <div className="container mx-auto font-sans">
        <SampleComponent />
        <div className="border-b border-gray-400 my-4"></div>
        <UserComponent />
      </div>
    </>
  );
};

export default App;
