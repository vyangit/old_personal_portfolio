import React, { Component } from 'react';
import './../css/section.css';

import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faChevronLeft, faChevronRight);

// Props: logo(optional, beware trademarks), organization, role, color, descriptions(array). bg-color, text-color
class InfoCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="card bg-{this.props.bg-color} text-{this.props.text-color}">
      </div>
    )
  }
}

// Props: header, gradient-color
class Section extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{height: this.props.height + 'vh', backgroundColor:this.props.background}} className="container-fluid">
          {this.props.children}
      </div>
    );
  }
}

export {InfoCard, Section};
