import React, { useState } from 'react';
import { ethers } from 'ethers';
import Button from '@mui/material/Button';

const WalletConnect = () => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting to wallet", error);
            }
        } else {
            alert('Please install MetaMask to use this feature.');
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={connectWallet}>
                {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet'}
            </Button>
        </div>
    );
};

export default WalletConnect;
