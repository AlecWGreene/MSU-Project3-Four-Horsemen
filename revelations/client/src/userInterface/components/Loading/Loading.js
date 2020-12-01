import React from 'react';
import './style.css'

export default function Loading() {
    return (
        
<>
    <div className="container">
        <div className="row justify-content-center">
            <div className="loading-container">
                <div className="loader" />
                <div id="customFont" className="animate">
                    AsheN Void
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row justify-content-center">
            <div id="customFont">
                Credits
            </div>
        <div className="row justify-content-center">
             <ul>
                    <p>Alec Greene </p>
                    <p>Ronald Pitts</p>
                    <p>Sebastian Arrazola</p>
                    <p>Maria Jimena Alvarez</p>
            </ul>
        </div>
        </div>
    </div>

</>
    )
}
