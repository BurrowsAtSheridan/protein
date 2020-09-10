import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from AWS</h1>
          <h2>I have given Auth!</h2>
      </header>
      <AmplifySignOut>Sign out here</AmplifySignOut>
    </div>
  );
}

export default withAuthenticator(App);

