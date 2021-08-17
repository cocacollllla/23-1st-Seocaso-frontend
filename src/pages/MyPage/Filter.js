import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
  shootRate = param => {
    this.props.postRate(param);
    // this.props.ratedFetch();
    this.props.modal();
  };

  render() {
    return (
      <div className="modal">
        <div className="container">
          <header>평가한 카페</header>

          <div>
            <ul>
              <li onClick={() => this.shootRate('&ordering=low_rating')}>
                평점 역순
              </li>
              <li onClick={() => this.shootRate('&ordering=high_rating')}>
                평점 순
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
