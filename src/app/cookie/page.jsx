import Footer from '@/common/components/Footer/Footer';
import NavHeader from '@/common/components/Header/components/NavHeader/NavHeader';
import Header from '@/common/components/Header/Header';
import styles from './page.module.css';

export default function Cookie() {
  return (
    <>
      <Header navigation={<NavHeader color={true} />} />

      <main className={styles.main}>
        <h1 className={styles.title}>Çerez Politikası</h1>

        <div className={styles.text}>
          <p>
            Sitemizde, kullanıcı deneyimini iyileştirmek için çerezler
            kullanılmaktadır.
          </p>

          <br />
          <p>
            Çerezler, kullanıcıların siteyi nasıl kullandığı hakkında bilgi
            toplar ve bu bilgiler analiz için kullanılır.
          </p>

          <br />

          <p>
            Çerezler kişisel bilgiler içermez ve kullanıcıları tanımlamak için
            kullanılmaz.
          </p>

          <br />
          <p>
            Tarayıcınızın ayarlarından çerezleri engelleyebilir veya
            silebilirsiniz, ancak bu durumda sitemizin bazı işlevleri düzgün
            çalışmayabilir.
          </p>

          <br />
          <p>
            Sitemizi kullanmaya devam ederek çerezlerin kullanılmasını kabul
            etmiş olursunuz.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
