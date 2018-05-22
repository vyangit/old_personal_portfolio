import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";

import chromeOverflow from "./../img/Projects/ChromeOverflow.png";

class ProjectSection extends Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <Section height="85" background="#fab297" title="Projects">
        <div className="project container-fluid" style={{height:'100%'}}>
          <div className="card-deck d-flex align-items-center">
              <InfoCard
                title="Audio Sync"
                description="In development!"
                date="May 2018"
                >
                <b>Description:</b><br/>
                Stay tuned!
              </InfoCard>
              <InfoCard background={chromeOverflow}
                title="Chrome Overflow"
                description="Chrome DevTool Extension"
                date="Feb 2017"
                >
                <b>Github Link: </b><a href="https://github.com/risamaki/ChromeOverflow" target="_blank" rel="noopener noreferrer">Click here</a><br/><br/>
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
