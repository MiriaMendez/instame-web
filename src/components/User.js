import React from 'react'
import AppServices from '../services/AppService'


class User extends React.Component {

    state = {
        data : {
            name: '',
            username: '',
            email:'',
            password:'',
            description: '',
            img: '',
            phone: Number,
            gender: ''
        },
        loading: true,
      
    }

    userList = () => {
        AppServices.userList(this.state.data.username)
        .then(user => {
            this.state({
                data: {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    description: user.description,
                    img: user.img,
                    phone: user.phone,
                    gender: user.gender
                },
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="User">
                    {this.state.userList.map(users => (
                        <username key={this.state.data.user.username} user={this.state.data.name}/>
                    ))}
            </div>
        )
    }
}

export default User