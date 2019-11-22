import React from 'react';
import faker from 'faker';
import AddComment from './AddComment'
import postcomment from './PostComment';
import { link } from 'fs';

class BlogPost extends React.Component {
    createNewComment = (name, comment) => {
        let newComment = document.createElement('PostComment');
        let blog = document.querySelector('#main');
        blog.appendChild(newComment);
    }
    render() {
        return (
            <div id="main" className="ui container main" style={{ paddingTop: '10px' }}>
                <img className="ui centered large image" src={faker.image.image()}></img>
                <h2>Busola sues fstoyinbo</h2>
                <p>{faker.lorem.paragraphs()}</p>
                <AddComment onFormSubmit={this.createNewComment} />
            </div>

        )
    }
}

export default BlogPost;