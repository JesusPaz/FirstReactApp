import React, { Component } from 'react';
import UserItem from "./UserItem";

class UserList extends Component {

  componentDidMount(){

  }

  onEditHandle(user){
      this.props.onEdit(user)
  }

  onDeleteHandle(user){
      this.props.onDelete(user)
  }

  render() {
      let listaUsuarios = this.props.users.map( usuario => 
      <UserItem key={usuario.id} user={usuario} onEdit={this.onEditHandle.bind(this)} onDelete={this.onDeleteHandle.bind(this)}/>)
    return (
       <div className="container">
           <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">email</th>
                    <th scope="col">Area</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios}
                </tbody>
            </table>
        </div> 
    );
  }
}

export default UserList;