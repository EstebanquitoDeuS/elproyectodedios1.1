import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Descripcion } from './components/Descripcion';
import { Computadoras } from './components/Computadoras';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Descripcion />
      <Computadoras />
      <Footer />

    </div>
  );
}

export default App;
