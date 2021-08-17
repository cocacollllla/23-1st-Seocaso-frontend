import React from 'react';
import './Mypage.scss';
import { withRouter } from 'react-router-dom';

class Evaluation extends React.Component {
  goToCafe = () => {
    this.props.history.push(`../Product/${this.props.id}`);
    console.log(this.props.history);
  };

  render() {
    const { image, cafename, evaluation } = this.props;
    return (
      <li onClick={this.goToCafe}>
        <div className="images-container" style={{ marginRight: '10px' }}>
          <img alt="#" src={image} style={{ borderRadius: '15px' }} />
        </div>
        <div className="cafe-name">{cafename}</div>
        <div className="cafe-star">{evaluation}</div>
      </li>
    );
  }
}

export default withRouter(Evaluation);
