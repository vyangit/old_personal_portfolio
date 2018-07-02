import React, {Component} from 'react';
import Section from './section.js'
import '../css/aboutMe.css';

import me from "./../img//AboutMe/me.jpg";

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
    var overallRowClass = this.state.isVertical ? "":"row";
    var imageContainerColClass = this.state.isVertical ? "":"align-self-center col-4";
    var descriptionContainerColClass = this.state.isVertical ? "":"align-self-center col-8";
    var fontSizeClass = this.state.isVertical? "aboutMe-description-vertical":"aboutMe-description-horizontal";
    var imageSize = this.state.isVertical ? {width:'65%'}:{width:'100%'};

    return (
      <Section height="85" background="#c0c0c0" title="About Me">
        <div className={"aboutMe container-fluid " + overallRowClass} style={{height:'100%'}}>
          <div className={"container-fluid image-section mx-auto " + imageContainerColClass}>
            <img src={me} alt="me" className="aboutMe-image" style={imageSize}/>
          </div>
          <div className={"container-fluid description-section  " + descriptionContainerColClass}>
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
      </Section>
    );
  }
}

export default AboutMeSection;
