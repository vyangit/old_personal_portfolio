import React, { Component } from 'react';
import {InfoCard, Section} from "./section"

class EducationSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="75" background="#afd7b4" title="Education">
        <div className="education">

        </div>
      </Section>
    );
  }
}

export default EducationSection;
