import React, { Component } from 'react';

class Header extends Component {

  constructor(){
      super()
      this.state = {
          numEmpl: 0,
          direccion: {
                calle: "12A",
                numero: "14-10"
          }
      }
   }

   componentWillMount(){
       this.setState({
           numEmpl: 10
       })
   }

  render() {
    return (
       <div className="container">
        <h1>{this.props.corporation}</h1>
        </div> 
    );
  }
}

export default Header;