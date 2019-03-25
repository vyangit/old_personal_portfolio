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
      <Section background="#fab297" title="Projects">
        <div className="project container-fluid">
          <div className="card-deck d-flex align-items-center">
              <InfoCard
                title="Snapp"
                description="Universal Window Program"
                date="July 2018 (Tenative release)"
                >
                <b>Description:</b><br/>
                Stay tuned!
              </InfoCard>
              <InfoCard
                title="Audio Synthesizer"
                description="CLI Audio Manager"
                date="June 2018 (In development)"
                >
                <b>Github Link: </b><a href="https://github.com/vyangit/audioSynthesizer" target="_blank" rel="noopener noreferrer">Click here</a><br/><br/>
                <b>Description:</b><br/>
                Ever watch a video, and find you can only hear the audio from
                one side of your earphones? The Audio Synthesizer can fix that!
                This program lets you split stream and sync audio from one audio
                output side to the other.<br/>
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
