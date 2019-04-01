import React, { Component } from 'react';
import './App.css';
//import NavBar from './js/navbar';
import Header from './js/headerSection';
import AboutMeSection from './js/aboutMeSection';
import EducationSection from './js/educationSection';
import WorkSection from './js/workSection';
import ProjectSection from './js/projectsSection';
import Footer from './js/footerSection';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<NavBar/>*/}
        <Header/>
        <AboutMeSection/>
        <EducationSection/>
        <WorkSection/>
        <ProjectSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
