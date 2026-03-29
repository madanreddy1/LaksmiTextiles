import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-container">

        <h1 className="logo">
          Lakshmi Textiles
        </h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Collection</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </div>
  );
}

export default Navbar;