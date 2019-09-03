import React, { Component } from 'react';

class PostForm extends Component {


    constructor(props){
        super(props);
        this.state = {userId: "", id: "", title: "", body: ""};
        
    }

    // componentDidMount(){
    //     this.setState({
    //         id: this.props.useredit.id,
    //         email: this.props.useredit.email,
    //         area: this.props.useredit.area,
    //     })
    // }


    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.postedit.id !== state.id){ 
            return {
                id: nextProps.postedit.id,
                userId: nextProps.postedit.userId,
                title: nextProps.postedit.title, 
                body: nextProps.postedit.body
            }
        }
        return null
    }

        //UNSAFE_componentWillReceiveProps(){
        // this.setState({
        //     id: this.props.useredit.id,
        //     email: this.props.useredit.email, 
        //     area: this.props.useredit.area
        // })
    //}

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value});
    }


    handleSubmit(e){
        e.preventDefault();
        //console.log(this.refs);
        let post = {
            id: this.state.id,
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
            
        }

        this.props.onAdd(post)
    }

    handleDelete(e){
        e.preventDefault();
        //console.log(this.refs);
        let post = {
            id: this.state.id,
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
            
        }

        this.props.onEdit(post)
    }

    render() {

        console.log(this.props.postedit)
        let post = this.props.postedit

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label forhtml="id">Id</label>
                    <input type="text" disabled={true} name="id" value={this.state.id} className="form-control" id="id" placeholder="Enter id" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label forhtml="idUser">IdUser</label>
                    <input type="text" name="idUser" value={this.state.userId} className="form-control" id="idUser" placeholder="Enter id User" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label forhtml="email">Title</label>
                    <input type="text" name="title" value={this.state.title} className="form-control" id="title" placeholder="Enter title" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label forhtml="area">Body</label>
                    <input type="text" name="body" value={this.state.body} className="form-control" id="body" placeholder="Enter body" onChange={this.handleChange.bind(this)}/>
                </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
        );
    }
    }

export default PostForm;