import React from "react";
import "./content.css";
import img from "../images/naturopathy-logo.png";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const About = () => {
  const {t} = useTranslation();
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <div className="column">
          <div className="column2">
            <div className="aboutimg">
              <img src={img} alt="" />
            </div>
            <div className="about">
              <div className="heading">
                <h4><Trans i18nKey={"homeabout"} components={{strong:<strong/>}}/></h4>
              </div>
              <div className="content">
                <p>
                  {t("aboutp1")}
                </p>
                <p>
                  {t("aboutp2")}
                </p>
                <p>
                  {t("aboutp3")}
                </p>
                <p>
                  {t("aboutp4")}
                </p>
                <p>
                  {t("aboutp5")}
                  <span id="quote">
                    {t("span")}
                  </span>
                  {t("aboutp5_1")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
