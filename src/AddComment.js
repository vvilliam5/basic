import React from 'react';

class AddComment extends React.Component {
    state = { name: '', comment: '' };
    formSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.name, this.state.comment)
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.formSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                    <input type="submit" className="ui button"></input>
                </div>
            </form>
        )
    }
}

export default AddComment;