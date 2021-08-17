import React from 'react';

import CoffeeMenu from './Menu/CoffeeMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import './Menu.scss';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  ClickRight = () => {
    this.setState(zero => ({ count: zero.count + 1 }));
  };

  ClickLeft = () => {
    this.setState(zero => ({ count: zero.count - 1 }));
  };

  render() {
    const { menu, title, type } = this.props;
    let marginLeft = this.state.count * -178;
    let marginRight = this.state.count * -178;
    let rightEnd = menu.length * -178 + 534;
    return (
      <section className="main-mid">
        <div className="mid-container">
          <h2 className="gallery-head">{title}</h2>
          <div
            className="gallery"
            style={{
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
            }}
          >
            <FontAwesomeIcon
              className="go-css go-left"
              onClick={this.ClickLeft}
              icon={faChevronCircleLeft}
              style={{
                color: '#fafafa',
                display: marginLeft === 0 ? 'none' : 'block',
              }}
            />
            <FontAwesomeIcon
              className="go-css go-right"
              onClick={this.ClickRight}
              icon={faChevronCircleRight}
              style={{
                color: '#fafafa',
                display: marginRight === rightEnd ? 'none' : 'block',
              }}
            />
            {menu.map(menu => (
              <CoffeeMenu menu={menu} id={menu.id} key={menu.id}>
                {type === 'menu' && (
                  <>
                    <img
                      alt="gallery"
                      className="gallery-image"
                      src={menu.url}
                    />
                    <div className="black-wrap"></div>
                    <div className="coffee-info">
                      <p>{menu.menu_name}</p>
                      <p>{menu.price}</p>
                    </div>
                  </>
                )}
                {type === 'recommend' && (
                  <>
                    <img
                      alt="gallery"
                      className="gallery-image"
                      src={menu.image}
                    />
                    <div className="black-wrap"></div>
                    <div className="coffee-info">
                      <p className="cafe-center ">{menu.name}</p>
                    </div>
                  </>
                )}
              </CoffeeMenu>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
