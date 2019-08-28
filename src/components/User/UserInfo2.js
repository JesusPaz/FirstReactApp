import React, { Component } from 'react';

class UserInfo2 extends Component {
  
    constructor(){
        super()
        this.state = {         
            user: {email: "", id: "",  name:"", username:""}
            }
        }
  
  
  componentDidMount(){
      let id = this.props.match.params.id

      fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(response => response.json())
        .then(user => this.setState({user}))
  }  

  render() {
      let user = this.state.user
      
    return (
        <ul>
            <li>ID: {user.id}</li>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
            <li>Name: {user.name}
            </li>
        </ul> 
    );
  }
}

export default UserInfo2;