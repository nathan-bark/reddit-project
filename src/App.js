import './App.css';

import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FormPage from './Components/FormPage/FormPage';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <Hero /> */}
        {/* <FormPage /> */}
        <SearchPage />
      </header>
    </div>
  );
}

export default App;
