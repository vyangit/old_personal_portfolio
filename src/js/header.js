import React, { Component } from 'react';
import './../css/header.css'


class Header extends Component{
  constructor(props){
    super(props);

    this.intro = "";
    this.typeIntro = this.typeIntro.bind(this);
  }

  typeIntro() {
    var totalTimeInMilliseconds = 1000; //0.1 second
    var introMsg = "Making the world more interesting, one line of code at a time"
    var timePerChar = totalTimeInMilliseconds/introMsg.length;

    for(var i = 0; i*timePerChar < totalTimeInMilliseconds; i++){
        this.intro = this.intro + introMsg.charAt(i);
    }
  }

  componentDidMount() {
    this.typeIntro()
  }

  render() {

    return (
        <div style={{height:'100vh'}} className="container-fluid header">
          <div className="row h-100 justify-content-center align-items-center">
            <div>
              <div className="title underline">Victor Yan</div>
              <div className="subtitle">{this.intro}</div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
