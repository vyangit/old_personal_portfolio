import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import $ from "jquery";

import './../css/infoCard.css';
import ubc from "./../img/Education/UBC.jpg";

// Props: logo(optional, beware trademarks), organization, role, color, descriptions(array). bg-color, text-color
class InfoCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showCover: true,
      showContent: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cardPart) {
    console.log(cardPart)
    if(cardPart == "cover"){
      this.setState({showCover: false});
    } else{
      this.setState({showContent: false});
    }
  }

  render() {
    var backgroundCoverStyle = {
      backgroundImage: 'url('+ ubc +')',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    };

    var backgroundContentStyle = {
      backgroundColor: 'white'
    };

    return (
      <div className="info-card"  >
        <div className="card" >
          <CSSTransition
            in={this.state.showCover}
            classNames="card-transition"
            timeout={300}
            unmountOnExit
            onExited={() => {
                this.setState({
                  showContent: true,
                });
              }
            }
          >
            <div style={backgroundCoverStyle} onClick = {() => this.handleClick("cover")}>
              <div className="card-body d-flex justify-content-center align-items-center card-body-overlay">
                <div className="card-cover-box">
                    <div className="card-text-title">BLACK DUCK SOFTWARE{this.props.title}</div>
                    <div className="card-text-role">Research Engineer{this.props.role}</div>
                    <div className="card-text-date">DATE{this.props.date}</div>
                </div>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={this.state.showContent}
            classNames="card-transition"
            timeout={300}
            unmountOnExit
            onExited={() => {
                this.setState({
                  showCover: true,
                });
              }
            }
          >
            <div style={backgroundContentStyle} onClick = {() => this.handleClick("content")}>
              <div className="card-body d-flex justify-content-center align-items-center card-body-underlay">
                {this.props.children}
                <div>this is filler</div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default InfoCard;
