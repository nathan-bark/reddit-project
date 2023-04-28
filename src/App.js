import './App.css';

import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FormPage from './Components/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <Hero /> */}
        <FormPage />
      </header>
    </div>
  );
}

export default App;
