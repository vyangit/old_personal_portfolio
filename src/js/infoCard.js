import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './../css/infoCard.css';

// Props: logo(optional, beware trademarks), organization, role, color, descriptions(array). bg-color, text-color
class InfoCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      showCover: true,
      showContent: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cardPart, e) {
    if(e.target.tagName.toLowerCase() === "a") {
      return;
    }
    if(cardPart === "cover"){
      this.setState({showCover: false});
    } else{
      this.setState({showContent: false});
    }
  }

  render() {
    var backgroundCoverStyle = {
      backgroundImage: 'url('+ this.props.background +')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    };

    var backgroundContentStyle = {
      backgroundColor: 'white',
      height: '100%',
      width: '100%'
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
            <div style={backgroundCoverStyle} onClick = {this.handleClick.bind(this, "cover")}>
              <div className="card-body d-flex justify-content-center align-items-center card-body-overlay">
                <div className="card-cover-box">
                    <div className="card-text-title">{this.props.title}</div>
                    <div className="card-text-description">{this.props.description}</div>
                    <div className="card-text-date">{this.props.date}</div>
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
            <div style={backgroundContentStyle} onClick = {this.handleClick.bind(this, "content")}>
              <div className="card-body d-flex justify-content-center align-items-center card-body-content">
                <div className="card-content-box">{this.props.children}</div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default InfoCard;
