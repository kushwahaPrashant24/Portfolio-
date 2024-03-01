import './App.css';
import Navbar from './Homepage/NavBar/navbar';
import Homepage from './Homepage/Homepage';
import Parallex from './Parallex/parallex';
import About from './About me/Aboutme';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Skills from './Skills/skills';

function App() {
  return (
    <div className="App">
     <section id="Homepage">
      <Homepage />
     </section>
     <section id='Services'>
     <Parallex type="services" />
     </section>
     <section id='About'><About /></section>
     <section id='Portfolio'>
     <Parallex type="Portfolio" />
     </section>
     <section id='Skills'><Skills /></section>
      <Project />
     <section id='Contact'><Contact /></section>
    </div>
  );
}

export default App;
