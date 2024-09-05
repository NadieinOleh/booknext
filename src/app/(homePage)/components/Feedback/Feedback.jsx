import React from 'react';
import Cart from './components/Card/Card';
import Cart1 from '../../../../../public/images/card1.png'
import Cart2 from '../../../../../public/images/card2.png'
import Cart3 from '../../../../../public/images/card3.png'

import styles from './styles.module.css';

const Feedback = () => {
  const textCard2 =
  "Bu kitap, hayatımın dönüm noktası oldu. Mehmet Kaya'nın anlatımı ve sunduğu zaman yönetimi metodolojisi sayesinde hedeflerin belirlenmesi ve gerçekleştirilmesi konusunda büyük ilerleme kaydettim. Hedefler yaşamın temel bir unsurudur prensibini gerçekten kavradım. Kesinlikle tavsiye ederim!"
  ;
  const textCard1 =  "Planlama ve Organizasyon Sanatı, sadece iş hayatında değil, kişisel hayatımda da büyük değişiklikler yapmamı sağladı. Motivasyon ve güven kazanmamda çok yardımcı oldu. Kitapta sunulan planlama ve organizasyon teknikleri, günlük yaşamımda daha düzenli ve hedeflerime odaklı olmamı sağladı. Kişisel verimlilik için harika bir kaynak."

  const textCard3 ="Mehmet Kaya'nın yazım tarzı ve verdiği örnekler çok etkileyici. Kitap, hedef belirleme ve organizasyon becerileri konusunda gerçekten rehber niteliğinde. İlerleme yönetimi ve adaptasyon konularında sunduğu bilgiler, hedeflerime ulaşmamda bana büyük ölçüde yardımcı oldu. Profesyonel gelişim için mükemmel."


  return (
    <section className={styles.feedback}>
      <h2 className={styles.title}>Yorumlar</h2>

      <div className={styles.block}>
        <Cart
          src={Cart1}
          name="Elif A"
          age={'23 yıl'}
          text={textCard1}
          flex={false}
        />
        <Cart
          src={Cart2}
          name="Mehmet K"
          age={'55 yıl'}
          text={textCard2}
          flex={false}
        />
        <Cart
          src={Cart3}
          name="Olivia D"
          age={'27 yıl'}
          text={textCard3}
          flex={true}
        />
      </div>
    </section>
  );
};

export default Feedback;
