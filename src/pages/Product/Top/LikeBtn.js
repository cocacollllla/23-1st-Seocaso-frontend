import React from 'react';

import './LikeBtn.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  addLike = () => {
    if (localStorage.getItem('TOKEN')) {
      let count = this.state.likes + 1;
      this.setState({
        likes: count,
      });
    } else {
      alert('로그인 해주세요');
    }
  };

  minusLike = () => {
    let count = this.state.likes - 1;
    this.setState({
      likes: count,
    });
  };

  render() {
    let { likes } = this.state;
    return (
      <div className="shop-btn-merge">
        <button
          className={likes > 0 ? 'shop-btn-disabled' : 'shop-btn'}
          onClick={likes > 0 ? this.minusLike : this.addLike}
        >
          <div className="shop-btn-words-container">
            <FontAwesomeIcon
              className={likes > 0 ? 'cross-disabled' : 'cross'}
              icon={faPlus}
              style={{ fontSize: 17 }}
            />
            <span className="see">보고싶어요</span>
            <div className="shop-btn-word"></div>
          </div>
        </button>
        <button className={likes > 0 ? 'shop-btn2-disabled' : 'shop-btn2'}>
          <FontAwesomeIcon
            className="triangle"
            icon={faCaretDown}
            style={{ fontSize: 17 }}
          />
        </button>
      </div>
    );
  }
}

export default LikeBtn;
