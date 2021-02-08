import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Product from './components/product/index';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Product></Product>
      <Product></Product>
      <Product></Product>

      <Product></Product>
      <Product></Product>
      <Product></Product>

      <Product></Product>

      <Footer></Footer>
    </div>
  );
}

export default App;