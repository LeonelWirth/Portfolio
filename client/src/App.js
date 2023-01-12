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
        <NavBar />
        <div className="Content">
          <div className="LateralBar">
            <p>
              Soy la barra lateral
            </p>
          </div>
          <div className="Body">
            <Header />
            <ProyectContainer />
            <StudiesContainer />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
