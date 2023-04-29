import './App.css';

import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FormPage from './Components/FormPage/FormPage';
import SearchPage from './Components/SearchPage/SearchPage';
import PostsPage from './Components/PostsPage/PostsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <Hero /> */}
        {/* <FormPage /> */}
        {/* <SearchPage /> */}
        <PostsPage />
      </header>
    </div>
  );
}

export default App;
