import React from 'react';
import gavel from './img/gavel.svg';

const Main = ()=>{
    return (
        <main className="container-homepage">
            <div className="banner">
                <h2>"SOLD"</h2>
                <img src={gavel} className="logo" alt="logo" />
            </div>
            <div className="main_content">
                Some more informational stuff down here
            </div>
        </main>
    )
}

export default Main;