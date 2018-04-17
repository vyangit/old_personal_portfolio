import React, { Component } from 'react';
import {InfoCard, Section} from "./section"

class WorkSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="75" background="#fb9692">
        <div className="work">
        </div>
      </Section>
    );
  }
}

export default WorkSection;
