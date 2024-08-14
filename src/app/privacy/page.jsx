import Footer from '@/common/components/Footer/Footer';
import NavHeader from '@/common/components/Header/components/NavHeader/NavHeader';
import Header from '@/common/components/Header/Header';
import styles from './page.module.css';

export default function Privacy() {
  return (
    <>
      <Header navigation={<NavHeader color={true} />} />

      <main className={styles.main}>
        <h1 className={styles.title}>Gizlilik Politikası</h1>

        <div className={styles.text}>
          <h2>Giriş</h2>
          <br />
          <p>
            Bu gizlilik politikası, sitemizi ziyaret eden ve hizmetlerimizi
            kullanan kullanıcıların gizliliğini koruma taahhüdümüzü belirtir.
            Kişisel bilgilerinizin güvenliğini sağlamak bizim için çok
            önemlidir.
          </p>
          <br />
          <h2>Kişisel Bilgilerin Toplanması </h2>
          <br />
          <p>
            Sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda şu
            bilgileri toplayabiliriz:
          </p>
          <br />
          <ul>
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Teslimat adresi</li>
            <li>Ödeme bilgileri (kredi kartı bilgileri)</li>
            <li>IP adresi ve tarayıcı bilgileri</li>
            <li>Çerezler aracılığıyla toplanan veriler</li>
          </ul>
          <br />
          <h2>Bilgilerin Kullanımı </h2>
          <br />
          <p>Topladığımız bilgileri şu amaçlarla kullanabiliriz:</p>
          <br />
          <ul>
            <li>Siparişleri işlemek ve teslimatını sağlamak</li>
            <li>Müşteri desteği sunmak</li>
            <li>Promosyonlar ve teklifler hakkında bilgilendirmek</li>
            <li>Web sitesini ve hizmetleri iyileştirmek</li>
            <li>Kullanıcı deneyimini kişiselleştirmek</li>
          </ul>
          <br />
          <h2>Bilgilerin Korunması </h2>
          <br />
          <p>Kişisel bilgilerinizin güvenliği için şu önlemleri alıyoruz:</p>
          <br />
          <ul>
            <li>Güvenli sunucularda saklama</li>
            <li>Şifreleme teknolojileri kullanma</li>
            <li>Yetkisiz erişimlere karşı koruma</li>
          </ul>
          <br />
          <h2>Çerezler </h2>
          <br />
          <p>
            Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler
            kullanıyoruz. Çerezler, tarayıcınıza yerleştirilen küçük veri
            dosyalarıdır ve sitemizdeki faaliyetlerinizi izlemek ve size özel
            içerik sağlamak amacıyla kullanılır.
          </p>
          <br />

          <h2>Üçüncü Taraflarla Paylaşım </h2>
          <br />
          <p>
            Kişisel bilgilerinizi üçüncü taraflarla paylaşmıyoruz. Ancak, bazı
            durumlarda hizmet sağlayıcılarımızla (kargo şirketleri, ödeme
            işlemcileri) paylaşmamız gerekebilir. Bu hizmet sağlayıcılar,
            bilgilerinizi sadece belirtilen hizmetleri sağlamak amacıyla
            kullanacaklardır.
          </p>
          <br />
          <h2>Kullanıcı Hakları </h2>
          <br />
          <p>
            Kullanıcılarımız, kişisel bilgilerinin düzeltilmesini,
            güncellenmesini veya silinmesini talep etme hakkına sahiptir. Bu
            talepleri yerine getirmek için bizimle iletişime geçebilirsiniz.
          </p>
          <br />
          <h2>Değişiklikler </h2>
          <br />
          <p>
            Bu gizlilik politikasında zaman zaman değişiklik yapabiliriz.
            Değişiklikler, web sitemizde yayınlandıktan sonra geçerli olacaktır.
            Kullanıcılarımızı, gizlilik politikamızı düzenli olarak gözden
            geçirmeye teşvik ediyoruz.
          </p>
          <br />
          <h2>İletişim </h2>
          <br />
          <p>
            Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz
            varsa, bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
