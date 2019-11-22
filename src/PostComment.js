import React from 'react';
import faker from 'faker';

class PostComment extends React.Component {
    render() {
        return (
            <div class="ui comments">
                <div class="comment">
                    <a class="avatar">
                        <img src={faker.image.avatar()}></img>
                    </a>
                    <div class="content">
                        <a class="author">{this.props.name}</a>
                        <div class="metadata">
                            <div class="date">Just Now</div>
                        </div>
                        <div class="text">
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