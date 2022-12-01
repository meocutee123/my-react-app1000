import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from './style.module.scss';

import { ReactComponent as CaretDown } from '@assets/icons/caret-down.svg';
import { ReactComponent as Brand } from '@assets/brand.svg';
import { ReactComponent as MagnifyingGlass } from '@assets/icons/magnifying-glass.svg';
import { ReactComponent as Pen } from '@assets/icons/pen.svg';
import { ReactComponent as Sun } from '@assets/icons/sun.svg';
import { ReactComponent as Moon } from '@assets/icons/moon.svg';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className={style.navbar}>
            <ul>
              <li>
                <NavLink to='/'>Homepages</NavLink>
                <CaretDown />
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <Link to='/categories'>Categories</Link> <CaretDown />
              </li>
              <li>
                <Link to='/authors'>Authors</Link>
              </li>
            </ul>

            <Brand />

            <ul>
              <li>
                <NavLink to='/search'>
                  <MagnifyingGlass />
                </NavLink>
              </li>
              <li>
                <Pen />
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
              <li>
                En <CaretDown />
              </li>
              <li>
                <Sun />
                <Moon />
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
