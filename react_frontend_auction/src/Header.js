import React, {useState, useEffect} from 'react';
import AuctionModal from './AuctionModal';

const Header = (props)=>{

    const [modalClass, setModalClass] = useState("");
    const [open, isOpen] = useState(false);
    const [deedId, setDeedId] = useState("");

    const generateId =  ()=> {
        return Math.floor(100000000 + Math.random() * 900000000);
    };
   


    useEffect(()=>{
        toggleModal();

    }, [isOpen]);

    const toggleModal = ()=>{
        isOpen(!open);
        if(open){
            setDeedId(generateId());
            /*setDeedUrl("");
            setDeedId(generateId());*/
            setModalClass("auction_modal_container auction_modal_contianer_show");
        }else{
            setModalClass("auction_modal_container");
        }
        
    }

    

    

   

    



    return (
        <header className="header">
            <h3>Auction Dapp</h3>
            <button className="new-auction-button" onClick={toggleModal}>
                <span>New Auction</span>
            </button>
            <AuctionModal modalClass={modalClass} toggleModal={toggleModal}  wallet={props.wallet} deedId={deedId}/>
        </header>
    )
}

export default Header;