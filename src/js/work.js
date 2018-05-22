import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";

import blackDuck from "./../img/Work/blackduck.png";
import ubcTa from "./../img/Work/ubccs.png";

class WorkSection extends Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <Section height="85" background="#fb9692" title="Work">
        <div className="work container-fluid" style={{height:'100%'}}>
          <div className="card-deck d-flex align-items-center">
            <InfoCard
            background={blackDuck}
            title="Synposys / Black Duck Software"
            description="Research Engineer"
            date="Sept 2017 - Present"
            >
              <b>Overview:</b><br/>
              On the development team, I collaborate in the implemention of new
              features. On the data security team, I assist in data analysis and documentation<br/><br/>
              <b>Development Tools:</b><br/>
              Java EE, Spring Boot, ReactJS<br/><br/>
              <b>Data Analysis Tools:</b><br/>
              Jupyter Notebooks, DBeaver or pgAdmin
            </InfoCard>
            <InfoCard
            background={ubcTa}
            title="University of British Columbia"
            description="Computer Science Teaching Assistant"
            date="Sept 2015 - Jun 2017"
            >
              <b>Overview:</b><br/>
              Hosted weekly office hours, and provided student feedback and guidance during labs.<br/><br/>
              <b>Courses assisted:</b><br/>
              CPSC 221 - Basic Algorithms and Data Structures<br/>
              CPSC 259 - Data Structures and Algorithms for Electrical Engineers<br/>
            </InfoCard>
          </div>
        </div>
      </Section>
    );
  }
}

export default WorkSection;
