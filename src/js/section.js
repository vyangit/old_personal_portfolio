import React, { Component } from 'react';

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
      <div style={{height:'100vh'}} className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export {InfoCard, Section};
