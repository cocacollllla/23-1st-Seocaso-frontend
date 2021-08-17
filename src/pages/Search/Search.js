import React from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../config';
import SearchList from './SearchList';
import './Search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResult: [],
    };
  }
  componentDidMount() {
    // Nav에서 넘겨받은 검색어를 쿼리파라미터로 백에 요청
    const searchKeyword = this.props.location.state.keyword;
    fetch(`${API.SEARCH_RESULT}${searchKeyword}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          searchResult: data,
        });
      });
  }

  render() {
    const { searchResult } = this.state;
    console.log(searchResult);
    return (
      <div className="search-result-box">
        <SearchList
          title="카페명 포함 결과"
          results={searchResult.cafe_name_results}
          // id={
          //   searchResult.cafe_name_results && searchResult.cafe_name_results.id
          // }
        />
        <SearchList
          title="주소 포함 결과"
          results={searchResult.address_search_results}
          // id={
          //   searchResult.address_search_results &&
          //   searchResult.address_search_results.id
          // }
        />
      </div>
    );
  }
}

export default withRouter(Search);
