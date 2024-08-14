
import Footer from '@/common/components/Footer/Footer';
import NavHeader from '@/common/components/Header/components/NavHeader/NavHeader';
import Header from '@/common/components/Header/Header';
import About from './components/About/About';
import Author from './components/Author/Author';
import Download from './components/Download/Download';
import Feedback from './components/Feedback/Feedback';
import { MapComponent } from './components/Map/Map';
import Order from './components/Order/Order';


import styles from './page.module.css';


export default function Home() {
  return (
    <>
      <Header navigation={<NavHeader color={true} />} />

      <main>
        <About />
        <Author />
        <Download />
        <Feedback />
        <MapComponent />
        <Order />
      </main>

      <Footer />
    </>
  );
}
