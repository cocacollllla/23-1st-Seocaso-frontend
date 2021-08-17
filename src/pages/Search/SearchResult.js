import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchResult extends React.Component {
  goToCafe = () => {
    this.props.history.push(`../Product/${this.props.id}`);
    console.log(this.props.history);
  };

  render() {
    const { id, image, name, address } = this.props;
    return (
      <li key={id} onClick={this.goToCafe}>
        <img alt="검색결과" src={image} />
        <div>{name}</div>
        <div>{address}</div>
      </li>
    );
  }
}

export default withRouter(SearchResult);
