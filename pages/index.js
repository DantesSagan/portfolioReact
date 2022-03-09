import Footer from './components/footer';
import Greet from './components/greet';
import NavBar from './components/navbar';
import Script from 'next/script';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-white via-blue-400 to-blue-300 h-screen'>
      <NavBar />
      <Greet />
      <Footer />
      <Script
        src='https://kit.fontawesome.com/0c15724ba9.js'
        crossorigin='anonymous'
      />
    </div>
  );
}
