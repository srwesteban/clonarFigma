import React from 'react';
import Layout from '../components/Layout';
import Header from '../sections/Header';
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
