import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />


        </Routes>
      </Router>

      
      
      
      </>
  );
}

export default App;
