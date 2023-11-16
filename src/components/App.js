import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import Escapades from './Escapades';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/escapades" exact element={<Escapades />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
