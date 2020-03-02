import React from 'react';
import AppService from '../services/AppService';

class Posts extends React.Component {
    state = {
        loading: true,
        user: null,
        img : null,
        comments : []
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

    componentDidMount() {
        this.userPost()
    }

    render() {
        return (
            <div>
                
                <img src={this.state.img} alt="Smiley face" height="100%" width="100%"></img>
                Username: <p>{this.state.user}</p>
                <div>{this.state.comments.map(e=>Object.values(e).map(x=><p>{x}</p>))}</div>
            </div>

        )
    }
}

export default Posts