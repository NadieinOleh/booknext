import Image from 'next/image';
import styles from './styles.module.css';

const YourComponent = () => (
  <section id='author' className={styles.author}>
    <div className={styles.block}>
      <div className={styles.imageWrapper}>
        <Image className={styles.img} layout="fill" objectFit="cover" alt="author" src="/author.png" />
      </div>

      <div className={styles.textBlock}>
        <p className={styles.name}>Mehmet Kaya</p>
        <p className={styles.text}>
        Bir gün, kağıt ve kalemle oturup hayatımı planlamaya karar verdim. Planlama ve Organizasyon becerileri, hayatımızdaki karmaşıklıkları düzenlemek için vazgeçilmezdir. Motivasyon ve Güven kazanarak, her şeyin üstesinden gelebileceğimizi fark ettim. Hedef Belirleme sürecinde, her adımı dikkatlice planlamak ve organize etmek, başarıya giden yolda bize rehberlik eder. Planlarımızı yaparken, her ayrıntıyı düşünmek ve her olasılığı hesaba katmak, bizi daha emin adımlarla ilerletir. Bu süreçte, kendimize olan güvenimizi artırarak, hedeflerimize ulaşmamız kolaylaşır.

        </p>
      </div>
    </div>
  </section>
);

export default YourComponent;
