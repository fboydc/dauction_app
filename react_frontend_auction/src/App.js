import React, {useState, useEffect} from 'react';
import './App.css';
import web3 from './config/web3';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import DeedRepository from './config/DeedRepository';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes)

const App= ()=> {

  //let [walletAddress, setWalletAddress] = useState(0);

  const [wallet, setWallet] = useState('');
  const [network, setNetwork] = useState('');
  
  const [newDeed, setNewdeed] = useState(false);


  useEffect(()=>{
    setWallet(web3.eth.givenProvider.selectedAddress);    
    
  }, [wallet, network]);

  useEffect(()=>{
    setNetwork(web3.eth.givenProvider.networkVersion);
  })

  useEffect(()=>{
    DeedRepository.events.DeedRegistered((error, event)=>{
      if(error)
        return;
      //console.log(event);
      setNewdeed({by: event.returnValues._by, id: event.returnValues._tokenId})
    });
  }, [newDeed])

   

    return (
      <div className="application-wrap">
          <Header wallet={wallet} newDeed={newDeed}/>
          <Main />
          <Footer wallet={wallet} network={network}/>
      </div>
    );
  }

export default App;
