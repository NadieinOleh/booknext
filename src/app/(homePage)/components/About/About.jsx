import Button from "@/common/components/Button/Button";
import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const About = () => {
  return (
    <section className={`${styles.container} ${styles.aboutBlock}`}>
      <div className={styles.textBlock}>
        <p className={styles.subTitle}>
          Bireysel Yaklaşım ve İlerleme Yönetimi: Hayatınızı Düzenleyin ve
          Hedeflerinize Kolayca Ulaşın
        </p>
        <h1 className={styles.title}>
          Planlama ve Organizasyon ile Işlerde başarı planlama metodolojisi:
          Hayatınızı Şekillendirin
        </h1>
        <p className={styles.titleText}>
          Mehmet Kaya`nın bu kitabı, başarılı bir hayat için gerekli olan
          Planlama ve Organizasyon becerilerinizi geliştirmenize yardımcı
          oluyor. Kaya, Motivasyon ve Güven unsurlarını ele alarak, hem kişisel
          hem de profesyonel hayatınızda nasıl daha etkili olabileceğinizi
          anlatıyor. Kitap, zaman yönetimi, öncelik belirleme ve etkili planlama
          konularında derinlemesine bilgiler sunuyor. Hedef Belirleme ve
          Adaptasyon stratejileri ile okuyucuların karşılaştıkları zorluklarla
          başa çıkmalarını sağlıyor. Bireysel Yaklaşım ile kendi yolunuzu
          bulmanıza ve bu yolda daha emin adımlarla ilerlemenize yardımcı olacak
          pratik öneriler sunuyor. Bu eser, düzenli ve başarılı bir yaşam sürmek
          isteyen herkes için mükemmel bir rehber. Mehmet Kaya, hayatın her
          alanında başarıya ulaşmanız için gerekli olan araçları ve teknikleri
          bu kitapta sizlerle paylaşıyor.
        </p>

        <div className={styles.buttonBlock}>
          <Button text={"Kitap sipariş et"} href={"#order"} color={true} />
          <Button text={"PDF olarak indir"} color={false} />
        </div>

        <div>
          <h2 className={styles.aboutTitle}>Kitap hakkında</h2>
          <p className={styles.aboutText}>
            Mehmet Kaya, kişisel gelişim ve organizasyon alanında uzman bir
            yazardır. Planlama ve Organizasyon becerilerini geliştirmek
            isteyenler için eşsiz kaynaklar sunan Kaya, bu alanda birçok
            başarılı kitaba imza atmıştır. Kariyeri boyunca, çeşitli şirketlerde
            danışmanlık yaparak, liderlerin ve çalışanların daha etkili
            olabilmeleri için stratejiler geliştirmiştir.
            <br />
            Kaya’nın eserlerinde, Motivasyon ve Güven unsurlarının kişisel ve
            profesyonel yaşamda başarıya ulaşmada nasıl kritik bir rol oynadığı
            vurgulanır. Kitaplarında, Hedef Belirleme ve Adaptasyon stratejileri
            ile okuyucularının karşılaştıkları zorluklarla başa çıkmalarını ve
            değişen koşullara hızlıca uyum sağlamalarını sağlamak için yöntemler
            sunar
            <br /> Mehmet Kaya, aynı zamanda Bireysel Yaklaşım felsefesine
            inanan bir yazardır. Her bireyin kendine özgü bir potansiyeli
            olduğuna ve bu potansiyeli ortaya çıkarmak için kişisel yöntemler
            geliştirilmesi gerektiğine inanır. Kaya’nın kitapları,
            okuyucularının kendi yollarını bulmalarına ve bu yolda daha emin
            adımlarla ilerlemelerine yardımcı olacak pratik öneriler içerir.
            Mehmet Kaya, düzenli ve başarılı bir yaşam sürmek isteyenler için
            vazgeçilmez bir rehberdir.
          </p>
        </div>
      </div>

      <Image
        className={styles.aboutImg}
        alt='about image'
        width={548}
        height={956}
        src={"/book.png"}
      />
    </section>
  );
};

export default About;
