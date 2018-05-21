import React, { Component } from 'react';
import InfoCard from "./infoCard";

class Slider extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="work container-fluid d-flex justify-content-center align-items-center" style={{height:'100%'}}>
        <div className="card-deck" >
        </div>
      </div>
    );
  }
}
