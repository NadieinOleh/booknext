import Footer from '@/common/components/Footer/Footer';
import NavHeader from '@/common/components/Header/components/NavHeader/NavHeader';
import Header from '@/common/components/Header/Header';
import About from './components/About/About';



export default function ThankYou() {
  return (
    <>
      <Header navigation={<NavHeader color={true} />} />

      <main>
        <About />
      </main>
      
      <Footer />
    </>
  );
}
