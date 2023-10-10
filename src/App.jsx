import About from './components/About';
import Navigation from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
      <Navigation />
    </>
  );
}

export default App;
