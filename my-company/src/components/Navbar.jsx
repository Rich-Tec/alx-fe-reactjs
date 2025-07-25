import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 15px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
