import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMeta, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./footer.css";
import fimg1 from "../images/fimg1.jpeg";
import fimg2 from "../images/fimg2.jpeg";
import fimg3 from "../images/fimg3.jpeg";
import fimg4 from "../images/fimg4.jpeg";
import img4 from "../images/7thNaturopathy.png";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import axios from "axios";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {t} = useTranslation()
  

  return (
    <footer className="footer">
      <div className="container">
        <div className="aboutus">
          <h4>
            <Trans i18nKey="footerh1" components={{ strong: <strong /> }} />
          </h4>
          <p>{t("footerp1")}</p>
          <Link className="link">
            <h6>
              &copy;{" "}
              <Trans
                i18nKey={"footercopyright"}
                components={{ strong: <strong /> }}
              />
            </h6>
          </Link>
          <form>
            <div className="newsletter">
              <label htmlFor="newsletter1" className="visually-hidden">
                {t("footerform")}
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-outline-success" type="button">
                {t("footerbtn")}
              </button>
            </div>
          </form>
        </div>

        <div className="links">
          <h4>
            <Trans i18nKey="footerh2" components={{ strong: <strong /> }} />
          </h4>
          <div className="rowlist">
            <ul>
              <li>
                <Link to="/">{t("flink1")}</Link>
              </li>
              <li>
                <Link to="/rti">{t("flink2")}</Link>
              </li>
              <li>
                <Link to="/tender">{t("flink3")}</Link>
              </li>
              <li>
                <Link to="/vacancy">{t("flink4")}</Link>
              </li>
              <li>
                <Link to="/conference-schedule">{t("flink5")}</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/objectives">{t("flink6")}</Link>
              </li>
              <li>
                <Link to="/downloads">{t("flink7")}</Link>
              </li>
              <li>
                <Link to="/notice">{t("flink8")}</Link>
              </li>
              <li>
                <Link to="/about">{t("flink9")}</Link>
              </li>
              <li>
                <Link to="/result">{t("flink10")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="imagepanel">
          <h4>
            <Trans i18nKey="footerh3" components={{ strong: <strong /> }} />
          </h4>
          <div className="gallery">
            <div className="pics">
              <a href="#">
                <img src={fimg1} alt="Gallery 1" />
              </a>
              <a href="#">
                <img src={fimg2} alt="Gallery 2" />
              </a>
            </div>
            <div className="pics">
              <a href="#">
                <img src={fimg3} alt="Gallery 3" />
              </a>
              <a href="#">
                <img src={fimg4} alt="Gallery 4" />
              </a>
            </div>
            <div className="icon">
              <img src={img4} alt="Icon" />
            </div>
          </div>
        </div>
        {visible && (
          <button
            className="back-to-top"
            onClick={scrollToTop}
            title="Back to top"
          >
            <FaArrowAltCircleUp className="topicon" />
          </button>
        )}
      </div>

      <div className="footer-bottom">
        <h4>
          <Trans i18nKey="footerh4" components={{ strong: <strong /> }} />
        </h4>
        <ul className="social-icons">
          <li>
            <Link to="https://www.facebook.com/ccryn1978/" target="blank">
              <FaMeta className="icon meta" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/ccryn_india/" target="blank">
              <FaInstagram className="icon insta" />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/@ccryn2809/videos" target="blank">
              <FaYoutube className="icon you-tube" />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/DirectorCcryn" target="blank">
              <BsTwitterX className="icon twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
