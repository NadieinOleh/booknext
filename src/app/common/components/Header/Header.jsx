import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Sidebar from './components/SideBar/SideBar';

import styles from './styles.module.css';


const Header = ({ navigation }) => {
  return (
    <header className={`${styles.container} ${styles.header}`}>
      <Link href="./">
        <Image height={38} width={165} src="/Bookd.svg" alt="logo" />
      </Link>

      <div className={styles.header__nav}>{navigation}</div>

      <Sidebar />
    </header>
  );
};

export default Header;
