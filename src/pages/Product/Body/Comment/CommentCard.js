import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentLike: this.props.commentList.review_like,
    };
  }

  likeClick = () => {
    let { review_like } = this.props.commentList;
    if (this.state.commentLike === review_like) {
      this.setState({
        commentLike: this.state.commentLike + 1,
      });
    } else if (this.state.commentLike > review_like) {
      this.setState({
        commentLike: this.state.commentLike - 1,
      });
    }
  };

  render() {
    const { nickname, star_rating, content, review_like, comment_on_review } =
      this.props.commentList;
    return (
      <li className="comment-card">
        <div className="card-top">
          <div className="top-face">
            <div className="img-container">
              <img
                alt="*"
                src="https://ca.slack-edge.com/TH0U6FBTN-U0235ED6MGR-dc4efcf9256d-512"
                onError={e => (e.target.style.display = 'none')}
                className="top-face-img"
              />
            </div>
            <div className="top-name">{nickname}</div>
          </div>
          <div className="top-rating">★ {star_rating}</div>
        </div>
        <div className="card-mid">
          <p className="mid-words">{content}</p>
        </div>
        <div className="card-bot">
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'grey' }} />
          <span className="bot-em">{this.state.commentLike}</span>
          <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
          <span className="bot-em">{comment_on_review}</span>
        </div>
        <div
          className={
            this.state.commentLike === review_like
              ? 'card-likes'
              : 'card-likes-disabled'
          }
        >
          <button
            className={
              this.state.commentLike === review_like
                ? 'likes'
                : 'likes-disabled'
            }
            onClick={this.likeClick}
          >
            좋아요
          </button>
        </div>
      </li>
    );
  }
}

export default CommentCard;
