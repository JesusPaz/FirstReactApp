import React, { Component } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import firebase from '../../config/firebase'



class Post extends Component {
 

    constructor(){
      super()
      this.state = {
        posts:[
          {userId: 1, id: 1, title: "Hola", body: "body1"},
          {userId: 1, id: 2, title: "Hola", body: "body2"},
          {userId: 1, id: 3, title: "Hola", body: "body3"},
          {userId: 1, id: 4, title: "Hola", body: "body4"}
          ],
          postedit: {userId: "", id: "", title: "", body: ""},
          postdelete: {userId: "", id: "", title: "", body: ""},
          database: firebase.firestore()
        }
      }


      componentDidMount(){
        this.refresh();
      }
   
  
      refresh(){
  
        //const users = firebase.database().ref('users');
    
        let post = []
         this.state.database.collection("post").get().then(
           querySnapshot =>{ querySnapshot.forEach( doc => {
             post.push(doc.data())
           })
           this.setState({post: post})
         });
    
        console.log(post);
      }


    addPost(post){
      // let users = this.state.users;
      // //console.log(user);
      // users.push(user);
      // this.setState({
      //   users: users
      // })
      
      if(post.id === ""){
          let id = Math.ceil(Math.random()*1000000)
          post.id = ""+id
      }
  
      this.state.database.collection("post").doc(post.id).set(post)
  
      this.refresh();
      }
  
    onDeleteHandle(post){
      this.state.database.collection("post").doc(post.id).delete()
      this.refresh();
     }
  
    onEditHandle(post){
      this.setState({
        postedit : post
      })
    }
  
  
    render(){
  
    return (
      <div className="container">
          <PostList posts={this.state.posts} onEdit={this.onEditHandle.bind(this)} onDelete = {this.onDeleteHandle.bind(this)}/>
          <PostForm onAdd={this.addPost.bind(this)} postedit={this.state.postedit} onDelete={this.state.postdelete}/>
      </div>
    );
    }
  }
  
  export default Post;
  
  