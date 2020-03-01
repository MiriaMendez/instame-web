import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'

const Header = () => {
    const { user, logout } = useAuthContext()

    return (
        <nav className="navbar navbar-light bg-light mb-2">
            <a className="navbar-brand" href="/">
                <i className="fa fa-camera-retro mr-2"></i>
                Insta<strong>me</strong>
            </a>

            {user && <i className="fa fa-power-off text-danger" onClick={logout}/>}
        </nav>
    )
}

export default Header
