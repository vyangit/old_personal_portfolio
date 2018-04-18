import React, { Component } from 'react';
import {Section} from "./section.js"
import './../css/footer.css';

import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSquare, faCodeBranch, faEnvelope} from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(faEnvelope, faSquare, faCodeBranch, faGithub, faLinkedinIn);


class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{height:'30vh', backgroundColor:'#00cccc'}} className="container-fluid">
        <div className="footer row h-100 justify-content-center align-items-center">
          <div className="container-fluid">
            <div style={{fontSize:"10vh"}}>
              <a className="icon" href="https://github.com/vyangit" target="_blank">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="square" color="#303030" size="lg"/>
                  <FontAwesomeIcon icon={["fab", "github"]} color="white" size="sm"/>
                </span>
              </a>
              <a className="icon" href="https://www.linkedin.com/in/vicyan/" target="_blank">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon="square" color="#0077B5" size="lg"/>
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} color="white" size="sm"/>
                </span>
              </a>
            </div>
          </div>
          <div className="container-fluid" style={{fontSize:"3vh"}}>
            <div>
              <FontAwesomeIcon icon="envelope"/> vyan.git@gmail.com
            </div>
            <div>
              	 &copy; 2018 Victor Yan
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
