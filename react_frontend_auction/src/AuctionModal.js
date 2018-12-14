import React, {useState, useEffect} from 'react';
import DeedRepository from './config/DeedRepository';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
           console.log("no value provided for the Deed URL");
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
            <div className="modal_header">
                <h2>New Auction</h2>
                <button className="close-button" onClick={resetModal}><FontAwesomeIcon icon="times" /></button>
            </div>
            <div className="modal_body">
                <div className="modal_step">
                    {
                        newDeed.id?
                        <div className="modal_step_header">
                            <span className="step_enumeration">1</span>
                            <p>
                                Create a non-fungible token (ERC 721 Compliant)
                                <p className="step_desc">
                                    Create a Deed/Token
                                </p>
                            </p>
                        </div>:
                        <div className="modal_step_header">
                             <span className="step_enumeration">1</span>
                             <p>
                                Create a non-fungible token (ERC 721 Compliant)
                                <p className="step_desc">
                                    Create a Deed/Token
                                </p>
                            </p>
                        </div>
                    }
                </div>
            </div>
            {
                /*
                newDeed.id?
                <div className="input_form_group">
                   <h3>Deed Info</h3>
                    <div className="input_form">
                        <span className="input_form_label">Deed Identifier</span>
                        <input className="input_form_input" value={newDeed.id} disabled/>
                    </div>
                    <div className="input_form">
                        <span className="input_form_label">Deed Url</span>
                        <input className="input_form_input" value={newDeed.url} disabled />
                    </div>
                    <div className="input_form"> 
                        <button className="input_form_button" onClick={createDeed} disabled>create</button>
                    </div>
                </div>:
                <div className="input_form_group enabled">
                    <h3>Create your deed:</h3>
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
                </div>
                */
            }
            <hr/>
            {
                /*
                newDeed.id?
                <div className="input_form_group enabled">
                        <h3>Create Auction:</h3>
                        <div className="input_form">
                            <span className="input_form_label">Deed ID: </span>
                            <input className="input_form_input" value={newDeed.id}></input>
                        </div>
                        <div className="input_form">
                            <span className="input_form_label">Owner Wallet:</span>
                            <input className="input_form_input" value={newDeed.by}></input>
                        </div>
                </div>:
                <div className="input_form_group">
                        <h3>Create Auction:</h3>
                        <div className="input_form">
                            <span className="input_form_label">Deed ID: </span>
                            <input className="input_form_input" value={newDeed.id} disabled></input>
                        </div>
                        <div className="input_form">
                            <span className="input_form_label">Owner Wallet:</span>
                            <input className="input_form_input" value={newDeed.by} disabled></input>
                        </div>
                </div>*/
            }
            
        </div>
    )
}

export default AuctionModal;