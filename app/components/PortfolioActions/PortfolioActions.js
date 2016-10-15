import React, { Component } from 'react';
import Link from 'react-router/Link';
import style from '#helper/style'; // eslint-disable-line import/no-unresolved
import styles from './PortfolioActions.css';

import Button from '../Button/Button';

@style(styles)
export default class PortfolioActions extends Component {
  render(): Object {
    return (
      <ul styleName="Actions">
        <li styleName="Action">
          {this.props.prev && <Link to={this.props.prev}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6   8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96  253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"/>
              </svg>

              <span styleName="Description">previous project</span>
          </Link>}
        </li>
        <li styleName="Action">
          <Button ghost big static={!!this.props.static}>
            {this.props.children}
          </Button>
        </li>
        <li styleName="Action">
          {this.props.next && <Link to={this.props.next}>
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
              <path d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8   8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8   2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z"/>
            </svg>

            <span styleName="Description">next project</span>
          </Link>}
        </li>
      </ul>
    );
  }
}
