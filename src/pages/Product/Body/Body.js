import React from 'react';
import { withRouter } from 'react-router-dom';

import { API } from '../../../config';

import Info from './Info';
import Menu from './Menu';
import Graph from './Graph';
import Comment from './Comment';
import SideInfo from './SideInfo';
import Review from './Review';
// import Recommend from './Recommend';

import './Body.scss';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      imageList: [],
      reviewList: [],
      graph: {},
    };
  }
  componentDidMount() {
    fetch(`${API.CAFE_INFO}${this.props.match.params.id}/menus`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.menus,
        });
      });
    fetch(`${API.CAFE_INFO}${this.props.match.params.id}/recommendation`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data.recommendation,
        });
      });
    fetch(`${API.CAFE_INFO}${this.props.match.params.id}/review`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.reviews,
        });
      });
    fetch(`${API.CAFE_RATE}${this.props.match.params.id}/star-rating`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          graph: data.result,
        });
      });
  }

  // 별점이 들어오면 코멘트 등장
  render() {
    const { imageList, menuList, reviewList, graph } = this.state;
    const { infoList } = this.props;
    return (
      <div className="body-container">
        <div>
          <div
            className="review-styling"
            style={{ display: this.props.show === 1 ? 'block' : 'none' }}
          >
            <Review />
          </div>
          <div className="body-container">
            <div className="main-info">
              <Info infoList={infoList} />
              <Menu type="menu" title="메뉴" menu={menuList} />
              <Graph graph={graph} info={infoList} />
              <Comment commentList={reviewList} />
              <Menu type="recommend" title="지역 추천" menu={imageList} />
            </div>
            <SideInfo infoList={infoList} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Body);
