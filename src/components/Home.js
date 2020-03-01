import React from 'react'
import Loading from './Loading'
import AppService from '../services/AppService'
import PostItem from './PostItem'

class Home extends React.Component {
    state = {
        loading: true,
        posts: []
    }

    fetchPosts = () => {
        AppService.posts()
            .then(posts => {
                this.setState({ loading: false, posts })
            })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    likePost = (post) => {
        AppService.likePost(post.id)
            .then(() => {
                this.fetchPosts()
            })
    }

    render() {
        if (this.state.loading) {
            return <Loading/>
        }

        return (
            <div className="Home">
                <div className="posts">
                    {this.state.posts.map(post => (
                        <PostItem key={post.id} post={post} onLike={this.likePost}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home
