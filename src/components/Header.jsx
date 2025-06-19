import React, { useEffect, useState } from 'react'
import img1 from '../images/moa.png'
import img2 from '../images/ccryn.png'
import img3 from '../images/Logos.png'
import logo1 from '../images/logo1.png'
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { BiSolidMessageError } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { GoClockFill } from "react-icons/go";
import { FaListUl } from "react-icons/fa"; 
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { useTranslation } from 'react-i18next';


function Header() {
    const { t, i18n } = useTranslation();
    const [fontSizeLevel, setFontSizeLevel] = useState(1);

    useEffect(()=>{
       const body = document.body;
        body.classList.remove("font-small", "font-normal", "font-large");
        if (fontSizeLevel === 0) body.classList.add("font-small");
        else if (fontSizeLevel === 2) body.classList.add("font-large");
        else body.classList.add("font-normal");
    },[fontSizeLevel])


    return (
        <header>
            <nav id='navbar'>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={img1} alt="moa" id='img1' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={img2} alt="moa" id='img2' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={img3} alt="logo" id='img3' />
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav2">
                <div className="container-fluid">
                    <span>
                        <img src={logo1} alt="logo" width="50" height="34" className='logo1 ' />
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/">
                                <FaHouse size={20} /><br />{t("home")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/about">
                                <BiSolidMessageError size={20} /><br />{t("about")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/objectives">
                                <TbTargetArrow size={20} /><br />{t("objectives")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/downloads">
                                <MdDownload size={20} /><br />{t("downloads")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/gallery">
                                <GrGallery size={20} /><br />{t("gallery")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/notice">
                                <GoClockFill size={20} /><br />{t("notice")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1">
                            <NavLink className="nav-link" to="/conference-schedule">
                                <FaCalendarAlt size={20} /><br />{t("conference_schedule")}
                            </NavLink>
                        </li>
                        <li className="nav-item text-center mx-1 px-1 dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaListUl size={20} /><br />{t("activities")}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/naturopathy-day-activities">{t("naturopathy_day_activities")}</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/guidelines-of-pm-yoga-awards-2025">{t("guidelines")}</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/result">{t("result")}</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item text-center mx-1 px-1 dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <HiOutlineDotsCircleHorizontal size={20} /><br />{t("others")}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/rti">{t("rti")}</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/tender">{t("tender")}</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/vacancy">{t("vacancy")}</NavLink></li>
                            </ul>
                         </li>
                         <li className="nav-item text-center mx-1 px-1">
                            <div className='btn-group btn-group-sm'>
                                <Link onClick={() => i18n.changeLanguage('hi')} className="anchor">अ | </Link>
                                <Link onClick={() => i18n.changeLanguage('en')} className="anchor"> A</Link>

                            </div> &nbsp;&nbsp;
                            <div className="btn-group btn-group-sm">
                                <Link onClick={() => setFontSizeLevel(prev => Math.min(2, prev + 1))} className="btn-lang"> A+ </Link>
                                <Link onClick={() => setFontSizeLevel(1)} className="btn-lang"> A </Link>
                                <Link onClick={() => setFontSizeLevel(prev => Math.max(0, prev - 1))} className="btn-lang"> A- </Link>
                            </div>
                         </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header