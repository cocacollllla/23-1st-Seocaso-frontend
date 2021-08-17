import React from 'react';

import Top from './Top/Top';
import Body from './Body/Body';

import { API } from '../../config';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
      show: 0,
    };
  }

  commentShow = star => {
    const { show } = this.state;
    if (show === 0) {
      this.setState({
        show: star,
      });
    }
  };

  componentDidMount() {
    fetch(`${API.CAFE_INFO}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.informations,
        });
      });
  }

  render() {
    return (
      <>
        <Top infoList={this.state.infoList} show={this.commentShow} />
        <Body infoList={this.state.infoList} show={this.state.show} />
      </>
    );
  }
}

export default Product;
