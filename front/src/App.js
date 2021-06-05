import React from 'react';
import Form from './components/Form';
import List from './components/List';
import MayorForm from './components/MayorForm';
import { StoreProvider } from './components/Store';

function App() {
  return <StoreProvider>
    <div className= 'container'>
    <h3>To-Do List</h3>
    <Form />
    <List /> 
    <h3>Gran Lista</h3>
    <MayorForm />
    </div>
  </StoreProvider>
}

export default App;
