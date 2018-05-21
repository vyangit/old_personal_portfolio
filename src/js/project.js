import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";

import chromeOverflow from "./../img/Projects/ChromeOverflow.png";

class ProjectSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#fab297" title="Projects">
        <div className="project container-fluid d-flex justify-content-center align-items-center" style={{height:'100%'}}>
          <div className="card-deck" >
            <InfoCard
            title="AudioSync"
            description="In development!"
            date="May 2018"
            >
              <b>Description:</b><br/>
              Stay tuned!
            </InfoCard>
            <InfoCard background={chromeOverflow}
            title="ChromeOverflow"
            description="Chrome DevTool Extension"
            date="Feb 2017"
            >
              <b>Github Link: </b><a href="https://github.com/risamaki/ChromeOverflow" target="_blank">Click here</a><br/><br/>
              <b>Description:</b><br/>
              A chrome extension that monitors the chrome DevTool console for
              errors. Upon an error, the top 5 question threads for the error are queried
              from Stack Overflow. The link and the top resolution for each thread
              is then displayed in the chrome DevTools for easy error resolution!
            </InfoCard>
          </div>
        </div>
      </Section>
    );
  }
}

export default ProjectSection;
