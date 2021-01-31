import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>Welcome.</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;