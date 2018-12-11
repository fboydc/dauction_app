import React, {useState, useEffect} from 'react';
import './App.css';
import DeedRepository from './config/DeedRepository';
import web3 from './config/web3';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const App= ()=> {

  //let [walletAddress, setWalletAddress] = useState(0);

  let [wallet, setWallet] = useState('');
  let [network, setNetwork] = useState(''); 

  useEffect(()=>{
    setWallet(web3.eth.givenProvider.selectedAddress);  
    setNetwork(web3.eth.givenProvider.networkVersion);
  }, [wallet, network]);

    return (
      <div className="application-wrap">
          <Header />
          <Main />
          <Footer wallet={wallet} network={network}/>
      </div>
    );
  }

export default App;
