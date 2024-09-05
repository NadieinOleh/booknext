import React from 'react';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import logo from '../../../../../public/images/Bookd.svg'

import Sidebar from './components/SideBar/SideBar';

import styles from './styles.module.css';


const Header = ({ navigation }) => {
  return (
    <header className={`${styles.container} ${styles.header}`}>
      <Link href="./">
        <ExportedImage height={38} width={165} src={logo} alt="logo" />
      </Link>

      <div className={styles.header__nav}>{navigation}</div>

      <Sidebar />
    </header>
  );
};

export default Header;
