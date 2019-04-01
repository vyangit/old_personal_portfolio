import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";
import '../css/projectsSection.css';

import chromeOverflow from "./../img/Projects/ChromeOverflow.png";

class ProjectSection extends Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <Section background="#fab297" title="Projects">
        <div className="project container-fluid">
        <div className="project-wrapper">
          <p className="project-subtitle-text">Open Source Software</p>
            <div className="card-deck d-flex align-items-center">
                <InfoCard
                  title="FloatVideo"
                  description="ElectronJS App (Win/MacOS)"
                  date="Sept 2018"
                  >
                  <b>Github Link: </b><a href="https://github.com/vyangit/FloatVideo" target="_blank" rel="noopener noreferrer">Click here</a><br/><br/>
                  <b>Description:</b><br/>
                  Simple Electron app that lets you play embedded videos in a floating window on your desktop.
                </InfoCard>
                <InfoCard
                  title="Audio Distributor"
                  description="CLI Audio Distributor"
                  date="June 2018 (In development)"
                  >
                  <b>Github Link: </b><a href="https://github.com/vyangit/audioDistributor" target="_blank" rel="noopener noreferrer">Click here</a><br/><br/>
                  <b>Description:</b><br/>
                  Ever watch a video, and find you can only hear the audio from
                  one side of your earphones? This audio distributer can fix that!
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
          <div className="project-wrapper">
            <p className="project-subtitle-text">Closed Source Software</p>
            <div className="card-deck d-flex align-items-center">
                <InfoCard
                  title="Project M"
                  description="E-commerce platform"
                  date="Mar 2019 (In development)"
                  >
                  <b>Description:</b><br/>
                  Stay tuned for more updates!
                </InfoCard>
                <InfoCard
                  title="CrossChatter"
                  description="Integration-based phone-to-desktop software"
                  date="Mar 2019 (In development)"
                  >
                  <b>Description:</b><br/>
                  The application is inspired around the basis that people want a connected experience with their phone and laptop.<br/>
                  The main goal is to allow users to connect their android (and iOS when development is possible) device through bluetooth or USB, and be able to access apps/functionality from their phone from their desktop.<br/>
                  The interface design will take a modular design and allow integration and pipeline modules to be designed and registered for use.<br/>
                  The current end result is up for debate however will be refined as development continues.<br/><br/>
                  Stay tuned for more updates!
                </InfoCard>
                <InfoCard
                  title="Project U"
                  description="Flutter App"
                  date="Jan 2019 (In development)"
                  >
                  <b>Description:</b><br/>
                  Stay tuned for the release!
                </InfoCard>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ProjectSection;
