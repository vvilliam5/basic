import React from 'react';
import RDOM from 'react-dom';

const App = () => {
    return <div>
        <h1>Hello</h1>
    </div>

}

RDOM.render(
    <App />,
    document.querySelector('#root')
)