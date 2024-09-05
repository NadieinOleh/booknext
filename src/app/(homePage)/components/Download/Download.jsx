"use client";

import React from "react";

import Button from "@/common/components/Button/Button";

import styles from "./styles.module.css";

const Download = () => {
  return (
    <section className={styles.download}>
      <h2 className={styles.title}>Alıntıyı indir</h2>

      <div className={styles.block}>
        <div className={styles.img}> </div>

        <div className={styles.textBlock}>
          <p className={styles.subTitle}> Mehmet Kaya</p>
          <h3 className={styles.textTitle}>Planlama ve Organizasyon Sanatı</h3>
          <p className={styles.text}>
            Elif Yılmaz, bu kitabında Bireysel Yaklaşım ve İlerleme Yönetimi
            konularına odaklanarak kişisel hedeflerinize ulaşmanın en etkili
            yollarını açıklıyor. Hedef Belirleme sürecinde karşılaşılan
            zorlukları aşmak için stratejiler sunan Yılmaz, aynı zamanda
            Motivasyon ve Güven kavramlarını da işliyor. Kitap, okuyucuların
            kendi güçlü yönlerini keşfetmelerine ve bu yönleri nasıl
            kullanabileceklerine dair pratik öneriler içeriyor. Planlama ve
            Organizasyon becerilerinizi geliştirerek, hayatınızdaki
            karmaşıklıkları düzenleyebilir ve hedeflerinize daha hızlı
            ulaşabilirsiniz. Kişisel gelişim yolculuğunuzda size rehberlik
            edecek bu eser, hedeflerinize ulaşmanız için gerekli olan tüm
            bilgileri ve ipuçlarını sunuyor. Elif Yılmaz, kendi deneyimlerinden
            yola çıkarak, kişisel başarıya ulaşmanın sırlarını paylaşıyor ve
            Adaptasyon yeteneklerinizi geliştirmenizi sağlıyor.
          </p>
          <Button
            text="PDF olarak indir"
            color={false}
            href="./Mert_Yıldırım.pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
