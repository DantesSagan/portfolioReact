import Footer from './components/footer';
import Greet from './components/greet';
import NavBar from './components/navbar';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-white via-blue-400 to-blue-300 h-screen'>
      <NavBar />
      <Greet />
      <Footer />
    </div>
  );
}
