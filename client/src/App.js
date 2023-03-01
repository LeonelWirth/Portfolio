import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProyectContainer from "./components/Projects/ProjectContainer";
import StudiesContainer from "./components/Studies/StudiesContainer";
import LateralBar from "./components/LateralBar/LateralBar";
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div  >
          <LateralBar />
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
