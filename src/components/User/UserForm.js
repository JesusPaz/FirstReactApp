import React, { Component } from 'react';

class UserForm extends Component {


    constructor(props){
        super(props);
        this.state = {id: '', email: '', area: ''};
        
    }

    // componentDidMount(){
    //     this.setState({
    //         id: this.props.useredit.id,
    //         email: this.props.useredit.email,
    //         area: this.props.useredit.area,
    //     })
    // }


    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.useredit.id !== state.id){ 
            return {
                id: nextProps.useredit.id,
                email: nextProps.useredit.email, 
                area: nextProps.useredit.area
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
        let user = {
            id: this.state.id,
            email: this.state.email,
            area: this.state.area
            
        }

        this.props.onAdd(user)
    }

    handleDelete(e){
        e.preventDefault();
        //console.log(this.refs);
        let user = {
            id: this.state.id,
            email: this.state.email,
            area: this.state.area
            
        }

        this.props.onEdit(user)
    }

    render() {

        console.log(this.props.useredit)
        let user = this.props.useredit

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label forhtml="id">Id</label>
                    <input type="text" disabled={true} name="id" value={this.state.id} className="form-control" id="id" placeholder="Enter id" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label forhtml="email">Email address</label>
                    <input type="email" name="email" value={this.state.email} className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <label forhtml="area">Area</label>
                    <input type="text" name="area" value={this.state.area} className="form-control" id="area" placeholder="Enter area" onChange={this.handleChange.bind(this)}/>
                </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
        );
    }
    }

export default UserForm;