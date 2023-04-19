import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateWatch } from './pages/createWatch';
import { SavedWatches } from './pages/savedWatches';
import { Auth } from './pages/auth';
import { Navbar } from './components/navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/createWatch" element={<CreateWatch />} />
          <Route path="/savedWatches" element={<SavedWatches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
