import React from 'react';
import faker from 'faker';

class PostComment extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        <img src={faker.image.avatar()}></img>
                    </a>
                    <div className="content">
                        <a className="author">{this.props.name}</a>
                        <div className="metadata">
                            <div className="date">Just Now</div>
                        </div>
                        <div className="text">
                            {this.props.comment}
                        </div>
                        {/* <div class="actions">
                            <a class="reply active">Reply</a>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

PostComment.defaultProps = {
    name: 'Williams',
    comment: 'Worked'
}

export default PostComment;