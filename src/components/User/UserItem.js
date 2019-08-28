import React, { Component } from 'react';


class UserItem extends Component {

  handleEdit(){
    //console.log(this.props.user)
    this.props.onEdit(this.props.user)
  }
  
  handleDelete(){
    
    this.props.onDelete(this.props.user)
  }
  render() {
      let user = this.props.user
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.area}</td>
            <td>
              <button className="btn btn-primary mx-3" onClick={this.handleEdit.bind(this)}
              >Editar</button>
              <button className="btn btn-danger " onClick={this.handleDelete.bind(this)}>Eliminar</button>
            </td>
        </tr> 
    );
  }
}

export default UserItem;