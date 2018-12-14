import React, {useState, useEffect} from 'react';
import DeedRepository from './config/DeedRepository';



const AuctionModal = (props)=>{

   
    const [deedUrl, setDeedUrl] = useState("");
    const [newDeed, setNewdeed] = useState({});
    const[auctionTitle, setAuctionTitle] = useState('');
    const[auctionMetadata, setAuctionMetadata] = useState('');
    const[startingPrice, setStartingPrice] = useState('');
    const[endDate, setEndDate] = useState('');


    

    const handleDeedUrlInput = (e)=>{
        setDeedUrl(e.target.value);
    }

    const handleAuctionTitle = (e)=>{
        setAuctionTitle(e.target.value);
    }

    const handleAuctionMetaData = (e)=>{
        setAuctionMetadata(e.target.value);
    }

    const handleStartingPrice = (e)=>{
        setStartingPrice(e.target.value);
    }

    const handleEndDate = (e)=>{
        setEndDate(e.target.value);
    }

    const createDeed = ()=>{
        if(validateInput(deedUrl)){
            DeedRepository.methods.registerDeed(props.deedId, deedUrl).send({from: props.wallet}, (error, transactionHash)=>{
                if(error)
                    console.log("error", error);
                else
                    console.log(transactionHash);

            });
        }        
        else{
           
        }
            
    }

    const createAuction = ()=>{
        console.log("to be implemented");
    }

    const validateInput = (input)=>{
        if(input){
            return true;
        }else{
            return false;
        }
    }
  
    
    const resetModal = ()=>{
        setDeedUrl("");
        
        props.toggleModal();
    }
    
    

    return(
        <div className={props.modalClass}>
            <div className="modal_top_row">
                <h3>Let's create your deed first:</h3>
                <button className="close-button" onClick={resetModal}>X</button>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed Identifier</span>
                 <input className="input_form_input" value={props.deedId} disabled/>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed Url</span>
                 <input className="input_form_input" value={deedUrl} onChange={handleDeedUrlInput}/>
            </div>
            <div className="input_form"> 
                <button className="input_form_button" onClick={createDeed}>create</button>
            </div>
            <hr/>
            <div className="input_form">
            {
             newDeed.id?<p>Deed ID: <span>{newDeed.id}</span>Owner Wallet:<span>{newDeed.by}</span></p>:<span>Create Deed first!</span>   
            }
            </div>  
            <div className="modal_top_row">
                <h3>Now, let's create an auction for this deed:</h3>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed ID:</span>
                 <input className="input_form_input" value={newDeed.id} disabled/>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Auction Title:</span>
                 {
                     newDeed.id?<input className="input_form_input" value={auctionTitle} onChange={handleAuctionTitle}/>:<input className="input_form_input" value={newDeed.id} disabled />
                 }
            </div>
            <div className="input_form">
                 <span className="input_form_label">Starting Price (in wei):</span>
                 {
                     newDeed.id?<input className="input_form_input" type="number" value={startingPrice} onChange={handleStartingPrice}/>:<input className="input_form_input" type="number" value={startingPrice} disabled/>
                 }
            </div>
            <div className="input_form">
                 <span className="input_form_label">End Date (EST):</span>
                 {
                     newDeed.id?<input className="input_form_input" type="datetime-local" value={endDate} onChange={handleEndDate}/>:<input className="input_form_input" type="number" value={handleEndDate} disabled/>
                 }
            </div>
            <div className="input_form">
                 <span className="input_form_label">Auction Summary:</span>
                 {
                     newDeed.id?<textarea className="input_form_textarea" value={auctionMetadata} onChange={handleAuctionMetaData}/>:<textarea className="input_form_textarea" value={auctionMetadata} disabled/>
                 }
            </div>
            <div className="input_form">
            <button className="input_form_button" onClick={createAuction}>start</button>
            </div>
                 
            
        </div>
    )
}

export default AuctionModal;