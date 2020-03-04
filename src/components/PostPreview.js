import React from 'react'
import { Link } from 'react-router-dom'


const PostPreview = ({id, img, user}) => {
    return( 
        <div>
            <Link to={`/post/${id}`} className="mb-1 d-block">
                <img src={img} alt="smiley face" className="preview-image d-block mb-2 mt-5 ml-3"/>
            </Link>
        </div>
    )
}

export default PostPreview