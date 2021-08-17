import React from 'react';

import './Stars.scss';

import TheStar from './TheStar';

import './Top.scss';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.score || 0,
    };
  }

  hoverStar = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = e.currentTarget.offsetWidth;
    let index = e.currentTarget.getAttribute('index');
    let score;

    if (starWidth * 0.5 < starX) {
      this.setState({
        rating: parseInt(index),
      });
      score = parseInt(index);
    }
    if (starX < starWidth * 0.5) {
      score = parseInt(index) - 0.5;
      this.setState({
        rating: index - 0.5,
      });
    }
    return score;
  };

  alertLogin = e => {
    if (!localStorage.getItem('TOKEN')) {
      alert('로그인 해주세요');
    }
    this.props.show(1);
  };

  clickStar = e => {
    let score = this.hoverStar(e);
    this.props.postStar(score);
  };

  render() {
    const MAP = [1, 2, 3, 4, 5];
    return (
      <>
        <div className="rate-container">
          <div className="rate-words">
            {this.state.rating > 0 ? '별이 반짝반짝 빛나요' : '평가해주세요'}
          </div>
          <div className="rate-stars" onClick={this.alertLogin}>
            {MAP.map(index => (
              <TheStar
                key={index}
                index={index}
                clickStar={this.clickStar}
                rating={this.state.rating}
                hoverStar={this.hoverStar}
                outStar={this.outStar}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Stars;
