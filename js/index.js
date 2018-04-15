import Header from './js/header';
import EducationSection from './js/education';
import WorkSection from './js/Work';
import ProjectSection from './js/project';
import Footer from './js/footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<EducationSection />, document.getElementById('education'));
ReactDOM.render(<WorkSection />, document.getElementById('work'));
ReactDOM.render(<ProjectSection />, document.getElementById('projects'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
