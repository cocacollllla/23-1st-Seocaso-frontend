import React from 'react';
import { withRouter } from 'react-router-dom';

import { API } from '../../../config';
import LikeBtn from './LikeBtn';
import Stars from './Stars';

import './Top.scss';

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
      cafeRate: 0,
      score: 0,
    };
  }
  componentDidMount() {
    fetch(`${API.CAFE_RATE}${this.props.match.params.id}/star-rating`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cafeRate: data.result,
          score: data.score,
        });
      });
  }

  postStar = star => {
    fetch(`${API.CAFE_RATE}${this.props.match.params.id}/star-rating`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        score: star,
      }),
    });
    console.log(this.state.score);
  };

  render() {
    const { cafeRate } = this.state;
    const { infoList } = this.props;

    return (
      <>
        <section className="top-top-top">
          <div className="top-backimg">
            <div className="backimg-container">
              <div className="backimg-left"></div>
              <div
                className="backimg"
                style={{
                  background: `no-repeat center/100% url(${infoList.background_image})`,
                }}
              >
                <div className="backimg-shadow-left"></div>
                <div className="backimg-shadow-right"></div>
                <div className="backimg-wrap"></div>
              </div>
              <div className="backimg-right"></div>
            </div>
            <div className="backinfo-container">
              <div className="poster-info-container">
                <div className="poster-container">
                  <img
                    alt="poster"
                    className="poster"
                    src={infoList.cafe_image_url}
                  />
                </div>
                <ul className="limit-info">
                  <li className="limit-info-list">
                    카페 순위•<em>{infoList.review_ranking}</em>
                  </li>
                  <li className="limit-info-list">
                    평점 순위•<em>{infoList.star_rating_ranking}</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-info-container">
            <div className="top-info">
              <h1 className="cafe-name">{infoList.name}</h1>
              <div className="cafe-category">{infoList.business_hour}</div>
              <div className="cafe-rate">
                평균 ★ {cafeRate.average} ({cafeRate.total_count})
              </div>
              <div className="shop-btn-container">
                <LikeBtn />
                <Stars
                  postStar={this.postStar}
                  score={this.state.score}
                  show={this.props.show}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Top);
