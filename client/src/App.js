import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";


import "./index.css"

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Hero />
      </div>
      <div className="page_content">
        <About />
      </div>
    </div>
  );
}

export default App;

