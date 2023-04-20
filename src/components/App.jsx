import React from 'react';
import Header from '../sections/Header';
import Layout from './Layout';
import Hero from '../sections/Hero';
// import reactLogo from './assets/react.svg';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

export default App;
