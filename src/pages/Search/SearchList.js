import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchResult from './SearchResult';

class SearchList extends React.Component {
  goToCafe = () => {
    this.props.history.push(`../Product/${this.props.id}`);
  };

  render() {
    const { title, results } = this.props;
    return (
      <div className="result-cafename">
        <div className="result-title">{title}</div>
        {results && results.length === 0 && (
          <div className="no-result">검색결과가 없습니다.</div>
        )}
        <ul className="search-result-list">
          {results &&
            results.map(el => {
              return (
                <SearchResult
                  id={el.id}
                  key={el.id}
                  image={el.image}
                  address={el.address}
                  name={el.name}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchList);
