import Button from '@/common/components/Button/Button';
import ExportedImage from "next-image-export-optimizer";import React from 'react';
import Book from '../../../../../public/images/book.png'

import styles from './styles.module.css';

const About = () => {
  return (
    <section className={`${styles.container} ${styles.aboutBlock}`}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Teşekkür ederim </h1>
        <p className={styles.titleText}>İsteğin için teşekkürler.</p>

        <Button text={'Geri'} color={true} href={'./'}/>
      </div>

      <ExportedImage
        className={styles.aboutImg}
        width={548}
        height={956}
        src={Book}
        alt='thank image'
      />
    </section>
  );
};

export default About;
