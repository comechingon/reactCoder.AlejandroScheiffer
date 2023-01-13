
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      
        <Navbar />
        
        
        <ItemListContainer greeting="¡Bienvenido!"/>
        <ItemCount onAdd={(count) => console.log( "se agregaron"+ count)} stock={10}/>
    </div>
    
  );
}

export default App;
