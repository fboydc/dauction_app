import React, {useState, useEffect} from 'react';



const AuctionModal = (props)=>{

       
      
      
    

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
                <button className="input_form_button">create</button>
            </div>
            <hr/>  
            <div className="modal_top_row">
                <h3>Now, let's create an auction for this deed:</h3>
            </div>
            <div className="input_form">
                 <span className="input_form_label">Deed Identifier</span>
                 <input className="input_form_input" value="" disabled/>
            </div>
        </div>
    )
}

export default AuctionModal;