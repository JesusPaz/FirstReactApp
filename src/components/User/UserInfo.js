import React, { Component } from 'react';
import firebase from '../../config/firebase'


class UserInfo extends Component {
  
    constructor(){
        super()
        this.state = {         
            database: firebase.firestore(),
            user: {email: "", id: "",  area:""}
            }
        }
  
  
  componentDidMount(){
      let id = this.props.match.params.id
      let docUser = this.state.database.collection("usuarios").doc(id)
      

      docUser.get().then( doc => {
          let user
          if (doc.exists){
              user = doc.data()
              this.setState(
                  {user}
              )
          }else{
              console.log("Not found")
          }
      })
  }  

  render() {
      let user = this.state.user
      
    return (
        <ul>
            <li>ID: {user.id}</li>
            <li>Email: {user.email}</li>
            <li>Area: {user.area}</li>
            <li>Nombre: {this.props.match.params.name}
            </li>
        </ul> 
    );
  }
}

export default UserInfo;