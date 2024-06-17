import React from 'react';
import Layout from './components/Layout/Layout';
import ContextProvider from './components/ContextProvider/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
