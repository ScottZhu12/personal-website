import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import HomeParticles from '../HomeParticles';
import Home from '../Home';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => {
  const ref = useRef();
  const [inViewRef, inView] = useInView();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
      console.log(ref.current);
      console.log(inViewRef);
    },
    [inViewRef]
  );

  return (
    <div className='app'>
      <HomeParticles />
      <Home />
      <Navigation isInView={inView} />
      <About reference={setRefs} />
      <Projects reference={setRefs} />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
