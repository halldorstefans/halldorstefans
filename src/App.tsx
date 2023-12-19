import Hero from './Hero';
import Expertise from './Expertise'
import Projects from './Projects'
import About from './About';
import Strengths from './Strengths'
import FooterCTA from './Footer';

function App() {
  return (
    <div id="home" className="App">
      <Hero />
      <Expertise />
      <Projects />
      <About />
      <Strengths />
      <FooterCTA />
    </div>
  );
}

export default App;
