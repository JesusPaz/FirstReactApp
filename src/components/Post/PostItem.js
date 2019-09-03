import React, { Component } from 'react';


class PostItem extends Component {

  handleEdit(){
    //console.log(this.props.user)
    this.props.onEdit(this.props.post)
  }
  
  handleDelete(){
    
    this.props.onDelete(this.props.post)
  }
  render() {
      let post = this.props.post
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button className="btn btn-primary mx-3" onClick={this.handleEdit.bind(this)}
              >Editar</button>
              <button className="btn btn-danger " onClick={this.handleDelete.bind(this)}>Eliminar</button>
            </td>
        </tr> 
    );
  }
}

export default PostItem;