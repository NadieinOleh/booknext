import Button from '@/common/components/Button/Button';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

const About = () => {
  return (
    <section className={`${styles.container} ${styles.aboutBlock}`}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Teşekkür ederim </h1>
        <p className={styles.titleText}>İsteğin için teşekkürler.</p>

        <Button text={'Geri'} color={true} href={'./'}/>
      </div>

      <Image
        className={styles.aboutImg}
        width={548}
        height={956}
        src={'/book.png'}
        alt='thank image'
      />
    </section>
  );
};

export default About;
