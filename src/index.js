import React from 'react';
import RDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container">
            <ApprovalCard>
                <CommentDetail author="Williams" time="Today at 9:00pm" commeent="Nicec Blog Post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );

}

RDOM.render(
    <App />,
    document.querySelector('#root')
)