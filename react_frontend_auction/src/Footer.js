import React, {useState} from 'react';
 

const Footer = (props)=>{

    
    return (
        <footer className="footer-container">
            <span className="footer-entry">Network: {props.network}</span>
            <span className="footer-entry">Wallet: {props.wallet}</span>
        </footer>
    );
}

export default Footer;