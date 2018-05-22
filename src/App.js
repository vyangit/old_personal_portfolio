import React, { Component } from 'react';
import './App.css';
//import NavBar from './js/navbar';
import Header from './js/header';
import EducationSection from './js/education';
import WorkSection from './js/work';
import ProjectSection from './js/project';
import Footer from './js/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<NavBar/>*/}
        <Header/>
        <EducationSection/>
        <WorkSection/>
        <ProjectSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
