import React, { Component } from 'react';
import {Section} from "./section.js"
import './../css/header.css';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {intro: ""}
    this.typeIntro = this.typeIntro.bind(this);
  }

  typeIntro(text, n) {
    var totalTimeInMilliseconds = 4000/text.length; //0.6 second

    if (n < text.length){
        var intro = this.state.intro + text.charAt(n);
        n++;
        setTimeout(function(){
          this.setState({intro: intro});
          this.typeIntro(text,n);
        }.bind(this), totalTimeInMilliseconds);
    }
  }

  componentDidMount() {
    var introMsg = "Making the world more exciting, one line at a time"
    setTimeout(function(){
        this.typeIntro(introMsg, 0);
    }.bind(this), 4000);
  }

  render() {

    return (
      <div style={{height:'100vh'}} className="container-fluid">
          <div className="header row h-100 justify-content-center align-items-center">
            <div>
              <div className="title underline">Victor Yan</div>
              <div className="subtitle">{this.state.intro}</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
