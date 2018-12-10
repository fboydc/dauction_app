import React, {useState, useEffect} from 'react';
import './App.css';
import DeedRepository from './config/DeedRepository';
import web3 from './config/web3';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import gavel from './img/gavel.svg';

const App= ()=> {

  //let [walletAddress, setWalletAddress] = useState(0);

  let [wallet, setWallet] = useState('');
  let [network, setNetwork] = useState(''); 

  useEffect(()=>{
    const provider = web3.eth.givenProvider;
    setWallet(provider.selectedAddress);
    setNetwork(provider.networkVersion);
  }, [wallet]);

    return (
      <div className="application-wrap">
          <Header />
          <Main />
          <Footer wallet={wallet} network={network}/>
      </div>
    );
  }

export default App;
