import "./App.css";

import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FormPage from "./Components/FormPage/FormPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import PostsPage from "./Components/PostsPage/PostsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="signin-register" element={<FormPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
