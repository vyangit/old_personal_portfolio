import React, {Component} from 'react';
import Section from './section.js'
import '../css/aboutMe.css';

import me from "./../img/AboutMe/me.jpg";

export class AboutMeSection extends Component{
  constructor(props){
    super();

    this.state = {
      isVertical: window.innerWidth < window.innerHeight
    };

    window.addEventListener('resize', () => {
        this.setState({
            isVertical: window.innerWidth < window.innerHeight
        });
    }, false);
  }

  render() {
    var fontSizeClass = this.state.isVertical? "aboutMe-description-vertical":"aboutMe-description-horizontal";

    return (
      <Section background="#c0c0c0" title="About Me">
        <div className="aboutMe container-fluid">
        <div className="row">
          <div className="col-auto my-auto mx-auto"><img src={me} alt="me" className="aboutMe-image"/></div>
          <div className="description-section col align-self-center ">
            <p className={fontSizeClass}>
              Hi, my name is Victor! I'm an aspiring software developer and tech enthusiast.
              I joined the exciting and dynamic world of software engineering
              because I felt the field resonated with my interests of solving complex
              problems and creating things to better people's lives! This website is a
              portfolio of my past and current work to date. I hope you find something
              interesting!
            </p>
          </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default AboutMeSection;
