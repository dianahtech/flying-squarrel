import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/navigation/routes';

const App = () => {
  return ( 
    <>     
    <Routes />
    <StatusBar style="auto" />       
    </>
  );
};

export default App;
