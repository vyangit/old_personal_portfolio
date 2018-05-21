import React, { Component } from 'react';
import './../css/section.css';

import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faChevronLeft, faChevronRight);

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
          <div style={{height:"100%"}} className="container-fluid">
            <div className={"section-title " + this.state.underlinedTitle}>{this.props.title}</div>
            <div className="section-body">{this.props.children}</div>
          </div>
          <div ref={this.title}/>
      </div>
    );
  }
}

export default Section;
