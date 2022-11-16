import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Portefeuilles from './components/Portefeuilles';
import Brokers from './components/Brokers';
import Business from './components/Business';
import Echanges from './components/Echanges';
import Contact from './components/Contact';


function App() {
 
  return (
    <div className="App">
    <Router basename='/'>
    <Chatbot/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portefeuilles' element={<Portefeuilles />} />
        <Route path='/echanges' element={<Echanges />} />
        <Route path='/brokers' element={<Brokers />} />
        <Route path='/business' element={<Business />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
