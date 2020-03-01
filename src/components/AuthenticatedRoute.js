import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const AuthenticatedRoute = (props) => {
    const { user } = useContext(AuthContext)

    if (user) {
        return <Route {...props}/>
    } else {
        return <Redirect to="/login" />
    }
}

export default AuthenticatedRoute
