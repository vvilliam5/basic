import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import AddComment from './AddComment'
import PostComment from './PostComment';

class BlogPost extends React.Component {
    state = { nam: '', comm: '' }

    createNewComment = (name, comment) => {
        this.setState({ comm: comment, nam: name })

    }
    postComment = () => {
        if (this.state.nam && this.state.comm) {
            return <PostComment name={this.state.nam} comment={this.state.comm} />
        }
    }
    render() {
        return (
            <div id="main" className="ui container main" style={{ paddingTop: '10px' }}>
                <img className="ui centered large image" src={faker.image.image()}></img>
                <h2>Busola sues fstoyinbo</h2>
                <p>{faker.lorem.paragraphs()}</p>
                <AddComment onFormSubmit={this.createNewComment} />

                {this.postComment()}
            </div>

        )
    }
}

export default BlogPost;