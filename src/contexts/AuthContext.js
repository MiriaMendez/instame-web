import React, { createContext, useContext } from 'react';
import AppService from '../services/AppService';

const AuthContext = createContext();

export class AuthContextProvider extends React.Component {
  state = {
    user: JSON.parse(localStorage.getItem('user'))
  }

  setUser = (user) => {
    localStorage.setItem('user', user ? JSON.stringify(user) : null)
    this.setState({ user })
  }

  logout = () => {
    AppService.logout()
      .then(() => {
        this.setUser()
      })
  }

  render() {
    const value = {
      user: this.state.user,
      setUser: this.setUser,
      logout: this.logout
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};


export const WithAuthConsumer = (WrappedComponent) => (props) => (
    <AuthContext.Consumer>
      {(authProps) => (<WrappedComponent {...props} {...authProps} />)}
    </AuthContext.Consumer>
  )

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext;
