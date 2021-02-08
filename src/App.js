import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navbar from './components/navbar/navbar';
import Catalog from './components/catalog';
import Todo from './components/todo';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>
      <hr />

      <Todo></Todo>

      <Footer></Footer>
    </div>
  );
}

export default App;