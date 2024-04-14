// import logo from './logo.svg';
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from "./Components/Contact/Contact"
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {



  return (
    <div className="App">
      <main className='main'>
        
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

      </main>


    </div>
  );
}

export default App;
