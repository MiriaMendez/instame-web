import React from 'react'
import AppServices from '../services/AppService'
import PostPreview from './PostPreview'
import './User.css';
import { Link } from 'react-router-dom';

class User extends React.Component {

    state = {
        name: '',
        username: '',
        email:'',
        password:'',
        description: '',
        img: '',
        phone: Number,
        gender: '',
        posts: [],
        loading: true,
    }

    componentDidMount = () => {
        AppServices.user(this.props.match.params.id)
        .then(user => {
            this.setState({
                ...user,
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="user">
                <div className="profile-detail">
                    <div className="profile-picture" style={{background: `url(${this.state.img}) no-repeat center / cover`}}></div>
                    <div>
                        <Link to={`/users/${this.state.id}`} className="mb-1 d-block">
                        @{this.state.username}
                        </Link>

                        <div className="bio-detail">
                            {this.state.description}
                        </div>
                    </div>
                </div>

                <div className="posts-wrapper">
                    {this.state.posts.map(post =>  <PostPreview {...post} /> )}
                </div>
            </div>
        )
    }
}

export default User