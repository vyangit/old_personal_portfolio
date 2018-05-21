import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";
import * as ubc from "./../img/Education/UBC.jpg";

class EducationSection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Section height="85" background="#afd7b4" title="Education">
        <div className="education container-fluid d-flex justify-content-center align-items-center" style={{height:'100%'}}>
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

export default EducationSection;
