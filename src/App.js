import React from 'react'
import { Provider } from 'react-redux'
// import CakeContainer from './components/CakeContainer'
// import HookCakeContainer from './components/HookCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
import UsersContainer from './components/UsersContainer'
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
