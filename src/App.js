import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductPages from './components/ProductPages';
import ViewCart from './components/ViewCart';
import CompanyLogo from './components/pngegg.png'; // Import your logo image

function HomePage() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <h1>WELCOME TO OUR STORE</h1>
        <p>Shop Everything with Shopify!</p>
        <img src={CompanyLogo} alt="Company Logo" style={{ maxHeight: '200px' }} />
      </div>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Use the imported CompanyLogo */}
          <Link className="navbar-brand" to="/">
            <img src={CompanyLogo} alt="Company Logo" style={{ maxHeight: '50px' }} />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Proceed to Shopping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">My Cart ({cart.length})</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/products" element={<ProductPages cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<ViewCart cart={cart} setCart={setCart} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;