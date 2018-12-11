import React from 'react';
import gavel from './img/gavel.svg';

const Main = ()=>{
    return (
        <main className="container-homepage">
            <div className="banner">
                <img src={gavel} className="logo" alt="logo" />
            </div>
            <div className="main_content">
                MAIN CONTENT GOES HERE
            </div>
        </main>
    )
}

export default Main;