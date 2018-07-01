import React, {Component} from 'react';
import Section from './section.js'
import '../css/aboutMe.css';

import me from "./../img//AboutMe/me.jpg";

export class AboutMeSection extends Component{
  constructor(props){
    super();
  }

  render() {
    var meStyle = {
      borderRadius:'50%',
      width: '100%',
      height: 'auto',
      float: 'left'
    }

    return (
      <Section height="85" background="#c0c0c0" title="About Me">
        <div className="aboutMe container-fluid row" style={{height:'100%'}}>
          <div className="container-fluid col-4 left-section align-self-center">
            <img src={me} alt="me" style={meStyle}/>
          </div>
          <div className="container-fluid col-8 right-section">
          <p className="aboutMe-description">Hi! My name is Victor.</p>
          </div>
        </div>
      </Section>
    );
  }
}

export default AboutMeSection;
