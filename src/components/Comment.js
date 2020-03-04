import React from 'react'
import { Link } from 'react-router-dom'
import "./Comment.css"

const Comment = ({user, text}) => {
    return( 
        <div className="comment">
            <Link to={`/users/${user.id}`} className="mb-1 d-block">
                @{user.username}
            </Link>
            {text}
        </div>
    )
}

export default Comment