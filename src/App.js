import React from 'react'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
