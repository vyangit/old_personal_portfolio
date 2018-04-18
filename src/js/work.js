import React, { Component } from 'react';
import {InfoCard, Section} from "./section"

class WorkSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#fb9692" title="Work">
        <div className="work">
        </div>
      </Section>
    );
  }
}

export default WorkSection;
