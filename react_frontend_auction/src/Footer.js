import React from 'react';
 

const Footer = (props)=>{

    
    
    return (
        props.wallet?
        <footer className="footer-container">
            <span className="footer-entry">Network: {props.network}</span>
            <span className="footer-entry">Address: {props.wallet}</span>
        </footer>:
        <footer>
            <footer className="footer-container">
                <span className="footer-entry">Network: {props.network}</span>
                <span className="footer-entry">No wallet selected</span>
            </footer>
        </footer>
    );
}

export default Footer;