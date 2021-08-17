import React from 'react';
import { withRouter } from 'react-router-dom';
import './RankList.scss';

class RankList extends React.Component {
  goToSub = () => {
    this.props.history.push(`../Product/${this.props.id}`);
  };

  render() {
    const { image, name, address } = this.props;
    return (
      <li className="carousel-list" onClick={this.goToSub}>
        {/* li 자체를 클릭해야 product로 넘어가도록 */}
        <img alt="카페 이미지 썸네일" src={image} />
        <div>{name}</div>
        <div>{address}</div>
        {this.props.children}
      </li>
    );
  }
}

export default withRouter(RankList);
