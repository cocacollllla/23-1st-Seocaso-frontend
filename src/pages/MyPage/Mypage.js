import React from 'react';
import './Mypage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Evaluation from './Evaluation';
import Filter from './Filter';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

class Mypage extends React.Component {
  goToMain = () => {
    this.props.history.push('/');
  };

  constructor() {
    super();
    this.state = {
      modal: 0,
      likeList: [],
      rateList: [],
      url: '',
      likeCount: 0,
      rateCount: 0,
    };
  }

  likeModal = () => {
    this.setState({
      modal: 1,
    });
  };

  rateModal = () => {
    this.setState({
      modal: 2,
    });
  };

  hadleModal = () => {
    this.setState({
      modal: 0,
    });
  };

  componentDidMount() {
    this.ratedFetch();
    this.likedFetch();
  }

  likedFetch = () => {
    fetch(`http://10.58.0.59:8000/cafes/user/1?category=liked${this.state.url}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          likeList: data.CAFE_LIST,
        });
      });
  };

  ratedFetch = () => {
    console.log(2222);
    fetch(
      `http://10.58.0.59:8000/cafes/user/1?category=rated${this.state.url}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(3333);
        this.setState({
          rateList: data.CAFE_LIST,
        });
      });
  };

  likeClickRight = () => {
    this.setState(zero => ({ likeCount: zero.likeCount + 1 }));
  };
  rateClickRight = () => {
    this.setState(zero => ({ rateCount: zero.rateCount + 1 }));
  };

  likeClickLeft = () => {
    this.setState(zero => ({ likeCount: zero.likeCount - 1 }));
  };
  rateClickLeft = () => {
    this.setState(zero => ({ rateCount: zero.rateCount - 1 }));
  };

  postRate = target => {
    console.log(target);
    this.setState(
      {
        url: target,
        rateCount: 0,
        likeCount: 0,
      },
      () => {
        this.ratedFetch();
      }
    );
  };

  render() {
    // const { currentIndex } = this.state;
    let likeMarginLeft = this.state.likeCount * -178;
    let likeMarginRight = this.state.likeCount * -178;
    let rateMarginLeft = this.state.rateCount * -178;
    let rateMarginRight = this.state.rateCount * -178;
    let likeRightEnd = this.state.likeList.length * -178 + 534;
    let rateRightEnd = this.state.rateList.length * -178 + 534;
    console.log(this.state.likeList);

    return (
      <>
        <div className="container">
          <section className="top-top">
            <div className="top-backimg">
              <div className="backimg-container">
                <div className="backimg-left"></div>
                <div className="backimg">
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
                      className="poster"
                      alt="profile"
                      src="https://i.imgur.com/OiguW6D.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="top-info-container">
              <div className="top-info">
                <h1 className="cafe-name">여기에 유저ID</h1>
                <div className="cafe-rate">오늘 당장 위코드를 시작하세요.</div>
              </div>
            </div>
          </section>
        </div>
        <div className="main-container">
          <div className="content-container">
            <section>
              <div className="evaluation-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron"
                  onClick={this.rateModal}
                />
                {this.state.modal === 2 && (
                  <Filter
                    type="rate"
                    modal={this.hadleModal}
                    postRate={this.postRate}
                    ratedFetch={this.ratedFetch}
                  />
                )}
                <h2 className="content">평가한 카페 📝</h2>
                <div className="image-content">
                  <ul
                    style={{
                      marginLeft: `${rateMarginLeft}px`,
                      marginRight: `${rateMarginRight}px`,
                    }}
                  >
                    {this.state.rateList.map(el => {
                      return (
                        <Evaluation
                          key={el.id}
                          image={el.image}
                          cafename={el.name}
                          evaluation={el.avg_rating}
                        />
                      );
                    })}
                  </ul>

                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="circle-left"
                    onClick={this.rateClickLeft}
                    style={{
                      color: '#fafafa',
                      display: rateMarginLeft === 0 ? 'none' : 'block',
                    }}
                  />

                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="circle-right"
                    onClick={this.rateClickRight}
                    style={{
                      color: '#fafafa',
                      display:
                        rateMarginRight === rateRightEnd ? 'none' : 'block',
                    }}
                  />
                </div>
              </div>

              <div className="like-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron"
                  onClick={this.likeModal}
                />
                {this.state.modal === 1 && (
                  <Filter
                    type="like"
                    modal={this.hadleModal}
                    postRate={this.postRate}
                    ratedFetch={this.likedFetch}
                  />
                )}
                <h2 className="content">좋아요 한 카페 👍</h2>
                <div className="image-content">
                  <ul
                    style={{
                      marginLeft: `${likeMarginLeft}px`,
                      marginRight: `${likeMarginRight}px`,
                    }}
                  >
                    {this.state.likeList.map(el => {
                      return (
                        <Evaluation
                          key={el.id}
                          image={el.image}
                          cafename={el.name}
                          evaluation={el.avg_rating}
                        />
                      );
                    })}
                  </ul>
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="circle-left"
                    onClick={this.likeClickLeft}
                    style={{
                      color: '#fafafa',
                      display: likeMarginLeft === 0 ? 'none' : 'block',
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="circle-right"
                    onClick={this.likeClickRight}
                    style={{
                      color: '#fafafa',
                      display:
                        likeMarginRight === likeRightEnd ? 'none' : 'block',
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Mypage;
