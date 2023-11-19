import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavoirFaire from './SavoirFaire';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import Escapades from './Escapades';
import Home from './Home';
import Background from "../assets/fond-rouge-2.jpg"
import Gallery from './Gallery';

function App() {
  return (
    <div className='app' /*style={{ backgroundImage: `url(${Background})`, backgroundSize:"cover" }}*/>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/savoir-faire' exact element={<SavoirFaire />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/escapades" exact element={<Escapades />} />
          <Route path='/gallery' exact element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
