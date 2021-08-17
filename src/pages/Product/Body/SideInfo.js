import React from 'react';

import ImageModal from './SideInfo/Image/ImageModal';

import './SideInfo.scss';

class SideInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    let { infoList } = this.props;
    return (
      <div className="main-side">
        <h2 className="side-top">인테리어</h2>
        <div className="side-mid">
          <img
            className="interior"
            alt="interior"
            src={infoList.id && infoList.gallery_image[1].img}
            key={infoList.id && infoList.gallery_image[1].index}
          />
          <div className="dark-wrap" onClick={this.handleModal}>
            {this.state.modal && (
              <ImageModal
                modal={this.handleModal}
                galleryList={infoList.gallery_image}
              />
            )}
            <span className="plus">click for more</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideInfo;
