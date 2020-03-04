import React from 'react'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import AppService from '../../services/AppService'
import { Redirect } from 'react-router-dom'
import './NewPost.css'

class NewPost extends React.Component {
    state = {
        img : null,
        body : '',
        error: false, 
        loading:false,
        success: false
    }

    handleChange = (event) => {
        const { name, value, files } = event.target
    
        this.setState({
            [name]: files ? files[0] : value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
    
        const { img, body } = this.state
    
        const formData = new FormData()
        formData.append('body', body)
        formData.append('img', img)
    
        this.setState({ loading: true, error: false }, () => {
          AppService.createPost(formData)
            .then(() => {
              this.setState({ success: true })
            })
            .catch(() => {
              this.setState({ error: true, loading: false })
            })
        })
      }
    
      render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''
    
        if (this.state.success) {
          return <Redirect to="/"/>
        }
    
        return (
          <div className="NewPost">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="body">Text</label>
    
                <input
                  value={this.state.body}
                  onChange={this.handleChange}
                  autoComplete="off"
                  name="body"
                  type="text"
                  className={`form-control ${errorClassName}`}
                  id="body"
                  placeholder="Enter name"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="img">Image</label>
    
                <input
                  onChange={this.handleChange}
                  name="img"
                  type="file"
                  className={`form-control ${errorClassName}`}
                  id="img"
                />
              </div>
    
              <button
                type="submit"
                className="btn btn-block btn-primary mb-3"
                disabled={this.state.loading}
              >
                Create post
              </button>
            </form>
          </div>
        )
      }
}

export default WithAuthConsumer(NewPost)