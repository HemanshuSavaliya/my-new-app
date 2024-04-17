import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import About from './componet/About';
import Contect from './componet/Contect';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
