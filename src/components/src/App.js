import React from 'react';
import WalletConnect from './components/WalletConnect';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Web3 Card Game</h1>
                <WalletConnect />
            </header>
        </div>
    );
}

export default App;
