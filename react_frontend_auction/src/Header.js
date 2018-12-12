import React, {useState, useEffect} from 'react';
import AuctionModal from './AuctionModal';

const Header = (props)=>{

    const [modalClass, setModalClass] = useState("");
    const [open, isOpen] = useState(false);
    const [deedId, setDeedId] = useState("");
    const [deedUrl, setDeedUrl] = useState("");


    useEffect(()=>{
        toggleModal();

    }, [isOpen]);

    const toggleModal = ()=>{
        isOpen(!open);
        if(open){
            setDeedUrl("");
            setDeedId(generateId());
            setModalClass("auction_modal_container auction_modal_contianer_show");
        }else{
            setModalClass("auction_modal_container");
        }
        
    }

    const handleDeedDeedUrlInput = (e)=>{
        setDeedUrl(e.target.value);
      }

    const generateId =  ()=> {
       
          return Math.floor(100000000 + Math.random() * 900000000);
    };

    



    return (
        <header className="header">
            <h3>Auction Dapp</h3>
            <button className="new-auction-button" onClick={toggleModal}>
                <span>New Auction</span>
            </button>
            <AuctionModal modalClass={modalClass} toggleModal={toggleModal} deedId={deedId} deedUrl={deedUrl} setDeedUrl={setDeedUrl} handleDeedDeedUrlInput={handleDeedDeedUrlInput} wallet={props.wallet} newDeed={props.newDeed}/>
        </header>
    )
}

export default Header;