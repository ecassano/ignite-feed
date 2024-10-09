import React from 'react';
import styles from './header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo" />
    </header>
  );
};

export default Header;
