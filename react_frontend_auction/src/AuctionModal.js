import React, {useState, useEffect} from 'react';
import DeedRepository from './config/DeedRepository';



const AuctionModal = (props)=>{

    useEffect(()=>{
        console.log("i've been rendered");
        return ()=>{
            console.log("i've been dismissed");
        }
    })


    const createDeed = ()=>{
        if(validateInput(props.deedUrl)){
            DeedRepository.methods.registerDeed(props.deedId, props.deedUrl).send({from: props.wallet}, (error, transactionHash)=>{
                if(error)
                    console.log("error", error);
                else
                    console.log(transactionHash);

            });
        }        
        else{
           
        }
            
    }

    const validateInput = (input)=>{
        if(input){
            return true;
        }else{
            return false;
        }
    }
  
      
    

    return(
        <div className={props.modalClass}>
            <div className="modal_top_row">
                <h3>Let's create your deed first:</h3>
                <button className="close-button" onClick={props.toggleModal}>X</button>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed Identifier</span>
                 <input className="input_form_input" value={props.deedId} disabled/>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed Url</span>
                 <input className="input_form_input" value={props.deedUrl} onChange={props.handleDeedDeedUrlInput}/>
            </div>
            <div className="input_form"> 
                <button className="input_form_button" onClick={createDeed}>create</button>
            </div>
            <hr/>
            <div className="input_form">
            {
             props.newDeed?<p>Deed ID: <span>{props.newDeed.id}</span>Owner Wallet:<span>{props.newDeed.by}</span></p>:<span>Create Deed first!</span>   
            }
            </div>  
            <div className="modal_top_row">
                <h3>Now, let's create an auction for this deed:</h3>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed ID:</span>
                 <input className="input_form_input" value={props.newDeed.id} disabled/>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Auction Title:</span>
                 <input className="input_form_input" value={props.newDeed.id} />
            </div>
        </div>
    )
}

export default AuctionModal;