import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error)
  }
)

const login = ({ email, password }) => http.post('/login', { email, password})

const logout = () => http.post('/logout', {})

const fetchPost = (id) => http.get(`/post/${id}`)

const fetchPosts = () => http.get(`/posts`)

const likePost = (id) => http.post(`/post/${id}/like`)

const comments = (data) => http.post(`/post/${data.id}/comments/create`, {text: data.comment})

const users = (id) => http.get(`/users/${id}`)

export default {
    login,
    logout,
    fetchPost,
    likePost,
    fetchPosts,
    comments,
    users
}
