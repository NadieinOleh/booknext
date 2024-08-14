
import Form from '@/common/components/Form/Form';
import React from 'react';

import styles from './styles.module.css';

const Order = () => {
  return (
    <section id='order' className={styles.order}>
      <h2 className={styles.title}>Posta yoluyla kitap sipariş etme</h2>
      <p className={styles.text}>
      Hedeflerinize ulaşmak için gereken motivasyonu ve güveni kazanın. Bu kitap, planlama ve organizasyon becerilerinizi geliştirerek, başarıya ulaşmanızı kolaylaştıracak. Hayatınızı dönüştürmeye bugün başlayın.

      </p>

      <div className={styles.form}>
        <Form />
      </div>
    </section>
  );
};

export default Order;
