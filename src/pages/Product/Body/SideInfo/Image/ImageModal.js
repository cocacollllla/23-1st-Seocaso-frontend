import React from 'react';
import './ImageModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

class ImageModal extends React.Component {
  constructor() {
    super();

    this.state = {
      pageNum: 0,
    };
  }
  nextBtn = () => {
    const { pageNum } = this.state;
    let index = pageNum;
    if (index === 3) {
      index = -1;
    }
    index = index + 1;
    this.setState({
      pageNum: index,
    });
  };

  prvBtn = () => {
    const { pageNum } = this.state;
    let index = pageNum;
    if (index === 0) {
      index = 3 + 1;
    }
    index = index - 1;
    this.setState({
      pageNum: index,
    });
  };

  render() {
    const { pageNum } = this.state;
    const { prvBtn, nextBtn } = this;
    const { galleryList } = this.props;
    return (
      <div className="modal-image" onClick={e => e.stopPropagation()}>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className="left"
          onClick={prvBtn}
        />
        <div className="carousel-wrapper" onClick={this.props.modal}>
          <div
            className="image-container"
            style={{ transform: `translateX(-${pageNum * 100}%)` }}
          >
            {galleryList.map(el => (
              <img key={el.index} src={el.img} alt="슬라이드이미지" />
            ))}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className="right"
          onClick={nextBtn}
        />
        <FontAwesomeIcon
          icon={faTimes}
          onClick={this.props.modal}
          className="mark"
        />
      </div>
    );
  }
}

export default ImageModal;
