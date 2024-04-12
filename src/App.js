import logo from './logo.svg';
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Welcome to my website!</h1>
      <p>This is a simple portfolio website built using React.</p> */}
      <main className='main'>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>


    </div>
  );
}

export default App;
