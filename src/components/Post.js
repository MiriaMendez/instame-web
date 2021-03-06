import React from 'react';
import AppService from '../services/AppService';
import Comment from './Comment';
import "./Post.css"

class Posts extends React.Component {
    state = {
        loading: true,
        user: null,
        img : null,
        comments : [],
        value: ''
    }

    userPost = () => {
        AppService.fetchPost(this.props.match.params.id)
        .then(post => {
            this.setState({ 
                loading: false, 
                user: post.user.username,
                img: post.img,
                comments: post.comments
            })
        })
    }

    onClickComment = (e) => {
        e.preventDefault()
        AppService.comments({id: this.props.match.params.id, comment: this.state.value})
        .then(comment => {
            this.setState({
                comments: [...this.state.comments, comment]
            })
        })
    }

    componentDidMount() {
        this.userPost()
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                
                <img className="post-photo" src={this.state.img} alt="Smiley face" height="100%" width="100%" />
                
                {this.state.comments.map(comment => <Comment {...comment} />)}
                    <form onSubmit={this.onClickComment}> 
                        <textarea className="comment-area" value={this.state.value} onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-block btn-primary mb-3">
                            Publicar
                        </button>
                    </form>
            </div>

        )
    }
}

export default Posts