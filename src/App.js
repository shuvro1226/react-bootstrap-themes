import React from 'react';
import Layout from './hoc/Layout/Layout';

import Themes from './components/Themes/Themes';
import NavigationBar from './components/Navigationbar/Navigationbar';
import Footer from './components/Footer/Footer';
import './App.css';

const App = (props) => (
  <Layout>
      <NavigationBar />
      <Themes />
      <Footer />
  </Layout>
);

export default App;