import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';
import '@/globals.css';

const Button = ({
  text,
  width,
  color = true,
  toggleSidebar = undefined,
  href = '#form',
}) => {
  return (
    <button onClick={toggleSidebar} style={{ width: width }}>
      <Link
        href={href}
        className={`${styles.button} ${color ? styles.color : styles.colorMob}`}
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
