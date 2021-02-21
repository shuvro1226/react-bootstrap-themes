import React from 'react';
import Layout from './hoc/Layout/Layout';

import Footer from './components/Footer/Footer';
import './assets/css/custom.css';
import './assets/css/responsive.css';

const App = (props) => (
  <Layout>
      <Footer />
  </Layout>
);

export default App;