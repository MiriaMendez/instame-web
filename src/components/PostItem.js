import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ post, onLike }) => {
    const handleLike = () => {
        onLike(post)
    }

    return (
        <div className="Post mb-4 border-bottom pb-1">
            <Link to={`/users/${post.user.id}`} className="mb-1 d-block">
                @{post.user.username}
            </Link>

            <img src={post.img} alt="post" className="w-100 d-block mb-2" />

            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-outline-danger btn-sm" onClick={handleLike}>
                    <i className="fa fa-heart text-danger mr-2" />
                    {post.likes.length}
                </button>

                <Link to={`/post/${post.id}`}>Show more</Link>
            </div>

            <p>{post.body}</p>
        </div>
    )
}


export default PostItem
