import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import '@/globals.css';

const NavHeader = ({
  flexDirection = 'row',
  color,
  toggleSidebar = undefined,
}) => {
  return (
    <nav>
      <ul style={{ flexDirection }} className={styles.navList}>
        <li>
          <Link
            onClick={toggleSidebar}
            className={`${styles.navItem} ${
              color ? styles.color : styles.colorMob
            }`}
            href={'./'}
          >
           Ana sayfa
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleSidebar}
            className={`${styles.navItem} ${
              color ? styles.color : styles.colorMob
            }`}
            href={'#author'}
          >
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleSidebar}
            className={`${styles.navItem} ${
              color ? styles.color : styles.colorMob
            }`}
            href={'#footer'}
          >
            Temas etmek
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavHeader;
