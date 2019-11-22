import React from 'react';
import RDOM from 'react-dom';
import faker from 'faker';
import BlogPost from './BlogPost';

const App = () => {
    return (
        <div className="ui container">
            <BlogPost />
        </div>
    );

}

RDOM.render(
    <App />,
    document.querySelector('#root')
)