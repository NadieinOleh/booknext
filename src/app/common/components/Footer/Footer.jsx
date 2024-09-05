import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import React from 'react';
import Form from '../Form/Form';
import Logo from '../../../../../public/images/Bookd.svg'

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <Link href="./">
        <ExportedImage height={38} width={165} src={Logo} alt="logo" />
      </Link>

      <div className={styles.block}>
        <nav className={styles.nav}>
          <Link href={'./'} className={styles.link}>
            Ana sayfa
          </Link>
          <Link href={'#author'} className={styles.link}>
            Hakkımızda
          </Link>
          <Link href={'#order'} className={styles.link}>
            Temas etmek
          </Link>
        </nav>

        <div className={styles.addressText}>
          <p>Adres: FEVZİ ÇAKMAK-2 S 37/20, Kızılay

</p>
          <p>Telefon: +90 532 123 4567</p>
          <p>E-posta: constructiveartistry.com</p>
        </div>

        <div className={styles.form}>
          <Form />
        </div>

        <nav>
          <ul className={styles.privacyBlock}>
            <li>
              <p className={styles.text}>©2024DRStudio</p>
            </li>
            <li>
              <Link className={styles.link} href={'/privacy'}>
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={'/cookie'}>
                Çerez Kullanımı
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
