// API는 `config.js` 파일에서 일괄적으로 관리하면서 import, export 를 통해 사용하는 식으로 관리하는 것이 좋습니다. 그렇지 않을 경우, 백엔드 서버 IP 가 변경되면 fetch 함수를 일일이 찾아서 API 를 직접 수정해 주어야 하기 때문입니다.

// `config.js` 에서 관리를 하면서 import / export 를 사용하면 아래와 같이 구성이 될 것입니다.

// ```jsx
// // src/config.js
// const BASE_URL = 'http://10.58.5.151:8000'
// export const GET_PRODUCT_API = `${BASE_URL}/products`

// // 사용하는 컴포넌트
// import { GET_PRODUCT_API } from '../../../config.js';

// ...

// fetch(`${GET_PRODUCT_API}/5`).then(...).then(...);
// ```

// 위의 경우, 백엔드 IP 가 바뀔 때 `config.js` 에서 IP 만 바꾸어주면 모든 API 가 새로운 IP 에 따라서 변경됩니다. 그렇기 때문에 일일이 fetch 함수를 찾아 API 를 수정해줄 필요가 없습니다.
export const BASE_URL = 'http://10.58.2.102:8000';
export const API = {
  RAITING_COUNT: `${BASE_URL}/cafes/rating-count`, // footer 평점 총 카운트
  RAITING_STAR: `${BASE_URL}/cafes?ordering=high_rating`, // 메인 carousel 별점순
  RAITING_REVIEW: `${BASE_URL}/cafes?ordering=high_count`, // 메인 carousel 리뷰순
  TOKEN_PROFILE: `${BASE_URL}/users/signin`, // 로그인시 토큰, 프로필 이미지
  CAFE_INFO: `${BASE_URL}/cafes/`, // 카페 정보
  CAFE_RATE: `${BASE_URL}/cafe/`, // 카페 별점
  SEARCH_RESULT: `${BASE_URL}/cafes/search?q=`, // 검색결과 페이지
  SIGNUP: `${BASE_URL}/users/signup`, // 검색결과 페이지
  SIGNIN: `${BASE_URL}/users/signin`, // 검색결과 페이지
};
