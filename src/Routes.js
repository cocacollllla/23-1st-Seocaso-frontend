import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Product from './pages/Product/Product';
import Mypage from './pages/MyPage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/search/:searchkeyword" component={Search} />
          <Route exact path="/Product/:id" component={Product} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
