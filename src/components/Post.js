import React from 'react';
import AppService from '../services/AppService';

class Posts extends React.Component {
    state = {
        loading: true,
        user: null,
        img : null,
        comments : [],
        value: ''
    }

    userPost = () => {
        console.log(this.props.match.params.id)
        AppService.fetchPost(this.props.match.params.id)
        .then(post => {
            console.log(post)
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
        console.log(this.state.comments)
        return (
            <div>
                
                <img src={this.state.img} alt="Smiley face" height="100%" width="100%"></img>
                <p>{this.state.user}</p>
                <div>{this.state.comments.map(e=>Object.values(e).map((x, i)=><p key={i}>{x}</p>))}</div>
                <div>
                    <form onSubmit={this.onClickComment}> 
                        <textarea className="comment-area witdh: 100" value={this.state.value} onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-block btn-primary mb-3">
                            Publicar
                        </button>
                    </form>
                    
                </div>
            </div>

        )
    }
}

export default Posts