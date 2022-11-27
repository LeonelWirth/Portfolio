import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProyectContainer from "./components/Proyects/ProyectContainer";
import StudiesContainer from "./components/Studies/StudiesContainer";
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="blur">
        <NavBar/>
        <Header/>
        <ProyectContainer/>
        <StudiesContainer/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
