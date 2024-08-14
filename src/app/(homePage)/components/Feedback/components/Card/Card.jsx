import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

const Card = ({ name, age, text, href = '/', src, flex }) => {
  return (
    <div
      className={`${styles.cart} ${flex ? styles.cartFlex : styles.cartWidth}`}
    >
      <div className={styles.infoBlock}>
        <Image width={78} height={78} alt="foto" src={src} />

        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.age}>{age}</p>
        </div>
      </div>

      <p className={styles.text}>{text}</p>

      <Link className={styles.link} href={href}>
        daha fazla detay
      </Link>
    </div>
  );
};

export default Card;
