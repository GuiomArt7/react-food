import { Outlet } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  // Agrega aquí las rutas a tus imágenes
  '/img/slide1.jpg',
  '/img/slide7.jpg',
  '/img/slide6.jpg',
];


export default function AuthLayouth() {
  return (
    <>
    <Navbar />
      <section className='absolute -z-1 overflow-hidden'>
        <Carousel 
        className='relative overflow-hidden' 
        infiniteLoop={true} 
        autoPlay={true} 
        showThumbs={false} 
        interval={8000}
        showArrows={false}
        dynamicHeight={true}
        centerMode={true}
        centerSlidePercentage={100}
        stopOnHover={false}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-5/3 lg:w-6/3">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </section>
      <main className='overflow-hidden relative z-50 bg-stone-200 max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>
        <img 
          src="../img/s.svg" 
          alt="imagen logotipo"
          className='max-w-xs'
          />
        <div className='p-10 w-full '>
          <Outlet />
        </div>
      </main>

    <Footer/>
    </>
  )
}
