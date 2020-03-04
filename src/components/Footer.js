import React, { useState } from 'react'
import User from './User'
import { Redirect } from 'react-router-dom'


const Footer = () => {
    const [redirect, setRedirect] = useState(false);

    const goToCreatePost = () => {
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/posts/new" />
    }

    return (
        <div> 
            {User && <i className="fa fa-plus-square post-button" style={{position: 'fixed', bottom: 0, right: 0, fontSize: '50px'}} 
            onClick={goToCreatePost.bind(this)}/>}
        </div>
    )
}

export default Footer