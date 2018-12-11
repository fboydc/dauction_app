import React, {useState, useEffect} from 'react';
import AuctionModal from './AuctionModal';

const Header = ()=>{

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
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      };


    return (
        <header className="header">
            <h3>Auction Dapp</h3>
            <button className="new-auction-button" onClick={toggleModal}>
                <span>New Auction</span>
            </button>
            <AuctionModal modalClass={modalClass} toggleModal={toggleModal} deedId={deedId} deedUrl={deedUrl} setDeedUrl={setDeedUrl} handleDeedDeedUrlInput={handleDeedDeedUrlInput}/>
        </header>
    )
}

export default Header;