'use client';

import Burger from '@/common/components/icon/Burger/Burger';
import { Close } from '@/common/components/icon/Close/Close';
import React, { useState, useRef, useEffect } from 'react';


import NavHeader from '../NavHeader/NavHeader';

import styles from './styles.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.sideBarBlock}>
      <Burger toggleSidebar={toggleSidebar} isActive={isActive} />

      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.sideBarList}>
          <div className={styles.close}>
            <Close toggleSidebar={toggleSidebar} />
          </div>

          <nav className={styles.navigation}>
            <NavHeader
              display={'flex'}
              flexDirection={'column'}
              color={false}
              toggleSidebar={toggleSidebar}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
