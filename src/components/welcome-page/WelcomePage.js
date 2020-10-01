import React from 'react';
import './WelcomePage.css';
import { Header } from '../header';
import { Board } from '../board';

function WelcomePage() {
  return (
    <div id="App" className="bg-gray-500">
      <Header />
      <div className="m-4">
        <Board title="My first board" />
      </div>
    </div>
  );
}

export default WelcomePage;