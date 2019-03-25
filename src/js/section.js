import React, { Component } from 'react';
import './../css/section.css';

// Props: header, gradient-color
class Section extends Component{
  constructor(props){
    super();

    this.state = {
      titleUnderlined: ""
    }
    this.scrollTrigger = React.createRef();
  }

  handleScroll(offset) {
    let heightDiff = Number(offset);
    let scrollPos = window.scrollY+window.innerHeight;

    if (scrollPos > heightDiff) {
        this.setState({
            underlinedTitle:"underline-no-center"
        });
    } else {
      return;
    }
  }

  componentDidMount() {
    let offset = parseInt(this.scrollTrigger.current.offsetTop, 0);
    window.addEventListener('scroll', this.handleScroll.bind(this, offset));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div style={{backgroundColor:this.props.background}}>
        <div className="container-fluid">
          <div className={"section-title " + this.state.underlinedTitle}>{this.props.title}</div>
          <div ref={this.scrollTrigger}/>
          <div className="section-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Section;
