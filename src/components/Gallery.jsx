import React from 'react'
import './gallery.css'
import img1 from '../images/gallery-image1.jpg';
import img2 from '../images/gallery-image2.jpg';
import img3 from '../images/gallery-image3.jpg';
import img4 from '../images/gallery-image4.jpg';
import img5 from '../images/gallery-image5.jpg';
import img6 from '../images/gallery-image6.jpg';
import img7 from '../images/gallery-image7.jpg';
import img8 from '../images/gallery-image8.jpg';
import img9 from '../images/gallery-image9.jpg';
import img10 from '../images/gallery-image10.jpg';
import img11 from '../images/gallery-image11.jpg';
import img12 from '../images/gallery-image12.jpg';
import img13 from '../images/gallery-image13.jpg';
import img14 from '../images/gallery-image14.jpg';
import img15 from '../images/gallery-image16.jpg';
import img16 from '../images/gallery-image16.jpg';
import img17 from '../images/gallery-image17.jpg';
import img18 from '../images/gallery-image18.jpg';
import img19 from '../images/gallery-image19.jpg';
import img20 from '../images/gallery-image20.jpg';
import img21 from '../images/gallery-image21.jpg';
import img22 from '../images/gallery-image22.jpg';
import img23 from '../images/gallery-image23.jpg';
import img24 from '../images/gallery-image24.jpg';
import img25 from '../images/gallery-image25.jpg';
import img26 from '../images/gallery-image26.jpg';
import img27 from '../images/gallery-image27.jpg';
import img28 from '../images/gallery-image28.jpg';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

function Gallery() {
  const {t}=useTranslation()
  return (
    <>
      <Header />
      <div className="container">
      <h3 className='heading'>{t("gallery")}</h3>
      <div className="gallery-box">   
        <img src={img1} alt="-img" />
        <img src={img2} alt="-img" />
        <img src={img3} alt="-img" />
        <img src={img4} alt="-img" />
        <img src={img5} alt="-img" />
        <img src={img6} alt="-img" />
        <img src={img7} alt="-img" />
        <img src={img8} alt="-img" />
        <img src={img9} alt="-img" />
        <img src={img10} alt="-img" />
        <img src={img11} alt="-img" />
        <img src={img12} alt="-img" />
        <img src={img13} alt="-img" />
        <img src={img14} alt="-img" />
        <img src={img15} alt="-img" />
        <img src={img16} alt="-img" />
        <img src={img17} alt="-img" />
        <img src={img18} alt="-img" />
        <img src={img19} alt="-img" />
        <img src={img20} alt="-img" />
        <img src={img21} alt="-img" />
        <img src={img22} alt="-img" />
        <img src={img23} alt="-img" />
        <img src={img24} alt="-img" />
        <img src={img25} alt="-img" />
        <img src={img26} alt="-img" />
        <img src={img27} alt="-img" />
        <img src={img28} alt="-img" />
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Gallery