import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProyectContainer from "./components/Proyects/ProyectContainer";
import StudiesContainer from "./components/Studies/StudiesContainer";
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="LateralBar">
          <a href="https://www.linkedin.com/in/leonel-wirth/">LinkedIn</a>
          <a href="https://github.com/LeonelWirth">Github</a>
        </div>
        <div >
          <div>
            <NavBar />
          </div>
          <div className="Body">
            <Header />
            <ProyectContainer />
            <StudiesContainer />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
