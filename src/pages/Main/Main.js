import React from 'react';
import { API } from '../../config';
import Ranking from './Ranking/Ranking';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      starRanking: [],
      reviewRanking: [],
    };
  }

  componentDidMount() {
    fetch(`${API.RAITING_STAR}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          starRanking: data.CAFE_LIST,
        });
      });

    fetch(`${API.RAITING_REVIEW}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviewRanking: data.CAFE_LIST,
        });
      });
  }

  render() {
    const { starRanking, reviewRanking } = this.state;
    return (
      <div className="main">
        <section>
          <Ranking type="star" title="별점 순" ranking={starRanking} />
          <Ranking type="review" title="리뷰 순" ranking={reviewRanking} />
        </section>
      </div>
    );
  }
}

export default Main;
