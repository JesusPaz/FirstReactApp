import React, { Component } from 'react';
import PostItem from "./PostItem";

class PostList extends Component {

  componentDidMount(){

  }

  onEditHandle(post){
      this.props.onEdit(post)
  }

  onDeleteHandle(post){
      this.props.onDelete(post)
  }

  render() {
      let listaPost = this.props.posts.map( comentario => 
      <PostItem key={comentario.id} post={comentario} onEdit={this.onEditHandle.bind(this)} onDelete={this.onDeleteHandle.bind(this)}/>)
    return (
       <div className="container">
           <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">IdUser</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPost}
                </tbody>
            </table>
        </div> 
    );
  }
}

export default PostList;