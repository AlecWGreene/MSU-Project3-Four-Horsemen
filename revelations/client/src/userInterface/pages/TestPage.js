import React from 'react';
import LoginModalTest from '../components/Modal/LoginModalTest';
import "../styles/testPage.css"

export default function TestPage() {
    return (
        <div>
            <LoginModalTest />
            <div className="test-borderOne">
               <div className="test-font">
                   hello
               </div>
            </div>
        </div>
    )
}
