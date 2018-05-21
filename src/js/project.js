import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";

class ProjectSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#fab297" title="Projects">
        <div className="project container-fluid d-flex justify-content-center align-items-center" style={{height:'100%'}}>
          <div className="card-deck" >
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
          </div>
        </div>
      </Section>
    );
  }
}

export default ProjectSection;
