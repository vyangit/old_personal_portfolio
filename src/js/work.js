import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";

class WorkSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#fb9692" title="Work">
        <div className="work container-fluid d-flex justify-content-center align-items-center" style={{height:'100%'}}>
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

export default WorkSection;
