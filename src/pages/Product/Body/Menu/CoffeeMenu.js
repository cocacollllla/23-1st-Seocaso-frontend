import React from 'react';
import { withRouter } from 'react-router-dom';

class CoffeeMenu extends React.Component {
  goToSub = e => {
    this.props.history.push(`../Product/${this.props.id}`);
    window.location.reload();
    window.scrollTo(0.0);
  };

  render() {
    return (
      <div className="gallery-container" onClick={this.goToSub}>
        {this.props.children};
      </div>
    );
  }
}

export default withRouter(CoffeeMenu);
