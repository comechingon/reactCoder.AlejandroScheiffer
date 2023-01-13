import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>Boom Piscinas</h1>

      <div className="Button" style={{ backgroundColor: `lightblue` }}>
        <button className="Button">Ver todo</button>
        <button className="Button">Piscinas</button>
        <button className="Button">Accesorios</button>

        
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
