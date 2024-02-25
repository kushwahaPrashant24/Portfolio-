import './App.css';
import Navbar from './Homepage/NavBar/navbar';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
     <section id="Homepage">
      <Homepage />
     </section>
     <section>PARALLEX</section>
     <section id='About'>ABOUT</section>
     <section>PROJECT1</section>
     <section>PROJECT2</section>
     <section>PROJECT3</section>
     <section>PROJECT4</section>
     <section>PROJECT5</section>
     <section id='Contact'>CONTACT</section>
    </div>
  );
}

export default App;
