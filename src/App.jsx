import UserList from './components/UserList';
import Sample from './components/Sample';
import Footer from './components/Footer';

// main app component.
const App = () => {
  return (
    <>
      <div className="container mx-auto font-sans">
        <Sample />
        <div className="divider"></div>
        <UserList />
        <div className="divider"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
