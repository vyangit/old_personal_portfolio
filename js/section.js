// Props: logo(optional, beware trademarks), organization, role, color, descriptions(array). bg-color, text-color
class InfoCard extends React.Component {
  constructor(){
    super(props);
  }

  render() {
    return (
      <div className="card bg-{this.props.bg-color} text-{this.props.text-color}">
      </div>
    )
  }
}

// Props: header, gradient-color, infoCardArr
class Section extends React.Component{
  constructor(){
    super(props);

  }

  render() {
    return (
      <div>
      {this.renderMyInfo(this.props.infoCardArr)}
      </div>
    );
  }
}

export class InfoCard {};
export class Section {};
