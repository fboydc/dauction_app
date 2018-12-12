import React, {useState, useEffect} from 'react';
import './App.css';
import web3 from './config/web3';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import DeedRepository from './config/DeedRepository';

const App= ()=> {

  //let [walletAddress, setWalletAddress] = useState(0);

  const [wallet, setWallet] = useState('');
  const [network, setNetwork] = useState('');
  
  const [newDeed, setNewdeed] = useState(false);


  useEffect(()=>{
    console.log("useEffect");
    setWallet(web3.eth.givenProvider.selectedAddress);  
    setNetwork(web3.eth.givenProvider.networkVersion);
    DeedRepository.events.DeedRegistered((error, event)=>{
      if(error)
        return;
      console.log(event);
      setNewdeed({by: event.returnValues._by, id: event.returnValues._tokenId})
    });
  }, [wallet, network]);

   

    return (
      <div className="application-wrap">
          <Header wallet={wallet} newDeed={newDeed}/>
          <Main />
          <Footer wallet={wallet} network={network}/>
      </div>
    );
  }

export default App;
