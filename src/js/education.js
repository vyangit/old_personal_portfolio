import React, { Component } from 'react';
import Section from "./section";
import InfoCard from "./infoCard";
import './../css/slider.css';

import ubc from "./../img/Education/UBC.jpg";
import coursera from "./../img/Education/coursera.png";

class EducationSection extends Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <Section height="85" background="#afd7b4" title="Education">
        <div className="education container-fluid" style={{height:'100%'}}>
          <div className="card-deck d-flex align-items-center">
            <InfoCard background={ubc}
            title="University of British Columbia"
            description="B.Sc (Computer Science)"
            date="Sept 2013 - May 2017"
            >
              <b>Major:</b> Combined Major in Computer Science & Microbiology<br/><br/>
              <b>Notable Coursework:</b><br/>
              CPSC 416 - Distributed Systems<br/>
              CPSC 317 - Internet Computing<br/>
              CPSC 319 - Software Engineer Capstone<br/>
              CPSC 344 - Introduction to HCI Methods<br/>
              CPSC 445 - Algorithms in Bioinformatics<br/>
            </InfoCard>
            <InfoCard background={coursera}
            title="Machine Learning - Stanford University"
            description="Coursera E-course"
            date="Jan 2018 - Mar 2018"
            >
              <b>Course Link: </b><a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">Click here</a><br/><br/>
              <b>Notable Coursework:</b><br/>
              Supervised and Unsupervised Learning<br/>
              Linear & Logistic Regression Modeling<br/>
              Neural Networks<br/>
              Support Vectors<br/>
              PCA and K-Mean Clustering<br/><br/>
              <b>Cool stuff outside of the course!</b><br/>
              <a href="https://lvdmaaten.github.io/tsne/" target="_blank" rel="noopener noreferrer">t-SNE Visualization</a>
            </InfoCard>
          </div>
        </div>
      </Section>
    );
  }
}

export default EducationSection;
