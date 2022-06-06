import './App.css';
import { Hemisphere } from './Components/Hemisphere';



import React, { Component } from 'react';

export default class App extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = { latitude : null , errorMessage: '' }
     
  // }
  state = { latitude : null , errorMessage: '' }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        this.setState({ latitude : position.coords.latitude })
      },
      (error) => {
        this.setState({errorMessage: error.message})
      }
    );  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  

  render() {
  
if( !this.state.latitude && this.state.errorMessage ){
return <div>{this.state.errorMessage}</div>
}
if( this.state.latitude && !this.state.errorMessage ){
  return <div><Hemisphere latitude={ this.state.latitude } /></div>
}
else{
  return <div>Loading...</div>
}

  
  }
}
