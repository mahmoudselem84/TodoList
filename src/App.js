import React from 'react';
import ListItems from './component/ListItems';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (<Provider store={store}>
    <ListItems />
  </Provider>
  
  );
}

export default App;
