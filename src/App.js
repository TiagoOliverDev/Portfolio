import Salutation from './components/Salutation';
import Skills from './components/Skills';
import Concepts from './components/Concepts';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="text-center px-5 lg:px-20">
        <Salutation />
        <About />
        <Skills />
        <Concepts />
        <Projects/>
    </div>
  );
}

export default App;
