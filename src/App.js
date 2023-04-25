import './App.css';

import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import SignInForm from './Components/Forms/SignInForm';
import RegisterForm from './Components/Forms/RegisterForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
        {/* <Hero /> */}
        <SignInForm />
        <RegisterForm />
      </header>
    </div>
  );
}

export default App;
