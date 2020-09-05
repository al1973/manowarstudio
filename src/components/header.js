import React from 'react';
import { Link } from 'gatsby';
import headerStyles from '../components/header.module.css';

const Header = () => (
  <header className={headerStyles.header}>
    <a className={headerStyles.logo} href="/">
      <img
        src="/images/sofia-logo.jpg"
        alt="no logo"
        height="160"
        width="160"
      />
    </a>
    <nav className={headerStyles.nav}>
      <a
        className={headerStyles.link}
        href="https://www.etsy.com/shop/ManOWarStudio"
      >
        Shop
      </a>
      <a className={headerStyles.link} href="/contact/">
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
