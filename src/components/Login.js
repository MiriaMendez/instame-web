import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AppService from '../services/AppService'
import { WithAuthConsumer } from '../contexts/AuthContext'

class Login extends React.Component {
    state = {
        data: {
            email: '',
            password: '',
        },
        error: false, 
        loading: false
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ loading: true, error: false }, () => {
            AppService.login({ ...this.state.data })
                .then((user) => {
                    this.props.setUser(user)
                },
                () => {
                    this.setState({ error: true, loading: false })
                }
                )
        })
    }

    render() {
        if (this.props.user) {
            return <Redirect to="/"/>
        }

        const errorClassName = this.state.error ? 'is-invalid' : ''

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            value={this.state.data.email}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="email"
                            type="email"
                            className={`form-control ${errorClassName}`}
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group mb-5">
                        <label htmlFor="password">Password</label>

                        <input
                            value={this.state.data.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            className={`form-control ${errorClassName}`}
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                        
                    <button
                        type="submit"
                        className="btn btn-block btn-primary mb-3"
                        disabled={this.state.loading}
                    >
                        Log in
                    </button>

                    <Link to="/register">Register</Link>
                </form>
            </div>
        )
    }
}

export default WithAuthConsumer(Login)
