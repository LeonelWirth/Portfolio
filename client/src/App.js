import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProyectContainer from "./components/Proyects/ProyectContainer";
import StudiesContainer from "./components/Studies/StudiesContainer";
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <ProyectContainer/>
      <StudiesContainer/>
      <Footer/>
    </div>
  );
}

export default App;
