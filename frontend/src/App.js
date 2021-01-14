import React from 'react';
import Header from './components/Header';

function App(){
    return(
        <>
            <Header title="HomePage">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    )
}

export default App;