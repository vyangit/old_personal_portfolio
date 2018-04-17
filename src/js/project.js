import React, { Component } from 'react';
import {InfoCard, Section} from "./section"

class ProjectSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="75" background="#fab297">
        <div className="project">
        </div>
      </Section>
    );
  }
}

export default ProjectSection;
