import UserList from './components/UserList';
import Sample from './components/Sample';
import Footer from './components/Footer';
import Header from './components/Header';

// main app component.
const App = () => {
  return (
    <>
      <div className="md:container md:mx-auto px-4 py-4 font-sans">
        <Header />
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
