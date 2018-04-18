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
        {this.props.children}
      </div>
    )
  }
}

// Props: header, gradient-color
class Section extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      titleUnderlined: ""
    }
    this.title = React.createRef();
  }

  handleScroll(offset) {
    let heightDiff = Number(offset);
    let scrollPos = window.scrollY;
    if (scrollPos > heightDiff) {
        this.setState({
            underlinedTitle:"underline-no-center"
        });
    } else {
        this.setState({
            underlinedTitle:""
        });
    }
  }

  componentDidMount() {
    var offset = parseInt(this.title.current.offsetHeight);
    window.addEventListener('scroll', this.handleScroll.bind(this, offset));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div style={{height: this.props.height + 'vh', backgroundColor:this.props.background}} >
          <div className="container-fluid">
          <div ref={this.title} className={"section-title " + this.state.underlinedTitle}>{this.props.title}</div>
          {this.props.children}
          </div>
      </div>
    );
  }
}

export {InfoCard, Section};
