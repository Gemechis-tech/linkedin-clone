import React from 'react';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { selectUser } from './features/userSlice';

function App() {

 const user = initializeUseSelector(selectUser);
  return (
    <div className="app">
    <Header />
    {!user ? (<Login />) :
    (
      <div className='app__body'>
      <Sidebar />
      <Feed  />
    </div>

    )}
  

    </div>
  );
}

export default App;
