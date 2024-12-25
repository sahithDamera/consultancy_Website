import React from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';

function App() {
  // In a real app, you'd use React Router here
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <FAQPage />
    </Layout>
  );
}

export default App;