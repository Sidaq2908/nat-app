import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'
import simg1 from '../images/slider1.jpg'
import simg2 from '../images/slider2.jpg'
import simg3 from '../images/slider3.jpeg'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { useTranslation } from 'react-i18next'

function Content() {
  const [isPaused, setIsPaused] = useState(false);
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false); 
  const {t}= useTranslation()
  return (
    <>
      <div className="marquee-container">
        <div
          className={`marquee-text ${isPaused ? 'paused' : ''}`}
          onMouseEnter={handlePause}
          onClick={handlePause}
          onMouseLeave={handleResume} 
        >
          <IoMdStar className='star' />
          <a className="marquee-link" href="/public/Notice/EOI.pdf">
              {t("marquee1")}
            <IoMdStar className='star' />
          </a>
          <Link className="marquee-link" to="https://recruit-ndl.nielit.gov.in/ccryn/" target='blank'> 
            {t("marquee2")}
           <IoMdStar className='star' />
          </Link>
          <a className="marquee-link" href="public/Vacancy/second stage 09.05.2025.pdf"> 
             {t("marquee3")}
            <IoMdStar className='star' />
          </a>
          <Link className="marquee-link" to="https://innovateindia.mygov.in/pm-yoga-awards-2025/" target='blank'> 
            {t("marquee4")}
             <IoMdStar className='star' />
          </Link>
          <a className="marquee-link" href="public/Vacancy/Advertisement_.pdf"> 
            {t("marquee5")}  
            <IoMdStar className='star' />
          </a>
          <a className="marquee-link" href="public/Result/List_of_candidate_for_interview.pdf"> 
             {t("marquee6")} 
             <IoMdStar className='star' />
          </a>
          <a className="marquee-link" href="/result"> 
            {t("marquee7")}  
             <IoMdStar className='star' />
          </a>
          <span className="marquee-link"> 
            {t("marquee8_1")} <a href="tel:+011-45649868" className='marquee-link'><FaPhone /> 011-45649868</a> 
            &nbsp;{t("marquee8_2")} <a href="mailto:ccryn.nielitrecruitment@gmail.com" className='marquee-link'>
            <FaEnvelope /> ccryn.nielitrecruitment@gmail.com </a> <IoMdStar className='star' />
          </span>
          <Link className="marquee-link"> 
           {t("marquee9")}  
            <IoMdStar className='star' />
          </Link>
          <a className="marquee-link" href="public/Notice/Date_of_Pitching_for_the_Yogatech_Chlallenge_2024.pdf">
             {t("marquee10")}
             <IoMdStar className='star' />
          </a>
          <a className="marquee-link" href="public/Result/Result_Yogatech_Challenge.pdf"> 
             {t("marquee11")}
             <IoMdStar className='star' />
          </a>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/guidelines-of-pm-yoga-awards-2025">
              <img
                src={simg1}
                className="d-block w-100 img-fluid"
                alt="Slide 1"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="https://journals.lww.com/ijyn/pages/currenttoc.aspx" target='blank'>
              <img
                src={simg2}
                className="d-block w-100 img-fluid"
                alt="Slide 2"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img
                src={simg3}
                className="d-block w-100 img-fluid"
                alt="Slide 3"
              />
            </Link>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Content