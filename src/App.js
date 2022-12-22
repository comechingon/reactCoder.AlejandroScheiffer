import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        
        <ItemListContainer greeting="¡Bienvenido!"/>
    </div>
    
  );
}

export default App;
