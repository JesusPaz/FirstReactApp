import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import firebase from '../../config/firebase'



class Users extends Component {
 

    constructor(){
      super()
      this.state = {
        users:[
          {email: "jesuspaz@correoimaginario.com", id: 1234, area:"Desarrollo"},
          {email: "anapaz@correoimaginario.com", id: 1235, area:"Desarrollo"},
          {email: "danielpaz@correoimaginario.com", id: 1236, area:"Soporte"},
          {email: "carlospaz@correoimaginario.com", id: 1237, area:"Desarrollo"}
          ],
          useredit: {email: "", id: "",  area:""},
          userdelete: {email: "", id: "",  area:""},
          database: firebase.firestore()
        }
      }


      componentDidMount(){
        this.refresh();
      }
   
  
      refresh(){
  
        //const users = firebase.database().ref('users');
    
        let users = []
         this.state.database.collection("usuarios").get().then(
           querySnapshot =>{ querySnapshot.forEach( doc => {
             users.push(doc.data())
           })
           this.setState({users: users})
         });
    
        console.log(users);
      }


    addUser(user){
      // let users = this.state.users;
      // //console.log(user);
      // users.push(user);
      // this.setState({
      //   users: users
      // })
      
      if(user.id === ""){
          let id = Math.ceil(Math.random()*1000000)
          user.id = ""+id
      }
  
      this.state.database.collection("usuarios").doc(user.id).set(user)
  
      this.refresh();
      }
  
    onDeleteHandle(user){
      this.state.database.collection("usuarios").doc(user.id).delete()
      this.refresh();
     }
  
    onEditHandle(user){
      this.setState({
        useredit : user
      })
    }
  
  
    render(){
    
    var  empresa="NaN"
  
    return (
      <div className="container">
          <UserList users={this.state.users} onEdit={this.onEditHandle.bind(this)} onDelete = {this.onDeleteHandle.bind(this)}/>
          <UserForm onAdd={this.addUser.bind(this)} useredit={this.state.useredit} onDelete={this.state.userdelete}/>
      </div>
    );
    }
  }
  
  export default Users;
  
  