import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
