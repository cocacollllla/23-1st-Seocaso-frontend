import React from 'react';

import './Info.scss';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      moreInfo: false,
    };
  }

  forMore = e => {
    if (this.state.moreInfo === false) {
      this.setState({
        moreInfo: true,
      });
    } else if (this.state.moreInfo === true) {
      this.setState({
        moreInfo: false,
      });
    }
  };

  render() {
    const { moreInfo } = this.state;
    const { infoList } = this.props;
    return (
      <section className="main-top">
        <header className="about-cafe">
          <h2 className="cafe-jungbo">카페 정보</h2>
          <div
            className={moreInfo === false ? 'more' : 'more-disabled'}
            onClick={this.forMore}
          >
            더보기
          </div>
        </header>
        <div className="cafe-location">
          <span className="span-info">
            <strong>{infoList.name}</strong>
          </span>
          <span className="span-info">{infoList.business_hour}</span>
          <span className="span-info">{infoList.address}</span>
          {moreInfo === true && (
            <>
              <span className="span-info">{infoList.phone_number}</span>
              <span className="span-info">{infoList.description}</span>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Info;
