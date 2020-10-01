import React from 'react';
import Header from './components/Header'
import './App.css';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>    


    </div>
  );
}

export default App;
