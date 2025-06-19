import React from "react";
import { Link } from "react-router-dom";
import img from "../images/naturopathy-logo.png";
import { GiVideoConference } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { GiFlagObjective } from "react-icons/gi";
import "./article.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Article = () => {
  const {t}=useTranslation()
  return (
    <>
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
                  {t("aboutp5")}{" "}
                  <span id="quote">
                    {t("span")}
                  </span>
                  {" "}
                  {t("aboutp5_1")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="title-1">
       <Trans i18nKey={"articleh1"} components={{strong:<strong/>}}/>
      </h3>
      <div className="menu-content">
        <div className="icn">
          <div className="icon-container">
            <GiVideoConference />
          </div>
          <br />
          <div className="box-heading">
            <h5><Trans i18nKey={"box1h"} components={{strong:<strong/>}}/></h5>
          </div>

          <p>
            {t("box1p")}{" "}
            <span style={{ fontWeight: "bold" }}>
             {t("box1span")}
            </span>
            {" "}
            {t("box1p_1")}
          </p>
        </div>
        <div className="workshop">
          <div className="icon-container">
            <GrWorkshop />
          </div>
          <br />
          <div className="box-heading">
            <h5><Trans i18nKey={"box2h1"} components={{strong:<strong/>}}/></h5>
          </div>
          <h6><Trans i18nKey={"box2h2"} components={{strong:<strong/>}}/></h6>
          <p>
            {t("box2p")}
          </p>
          <h6><Trans i18nKey={"box2h3"} components={{strong:<strong/>}}/></h6>
          <p>
           {t("box2p_1")}
          </p>
        </div>
        <div className="co">
          <div className="icon-container">
            <GiFlagObjective />
          </div>
          <br />
          <div className="box-heading">
            <h5><Trans i18nKey={"box3h"} components={{strong:<strong/>}}/></h5>
          </div>
          <p>
           <strong> {t("box3h1")}</strong> {t("box3p_1")}
          </p>
          <p>
            <strong>{t("box3h2")}</strong> {t("box3p_2")}
          </p>
          <p>
            <strong>{t("box3h3")}</strong> {t("box3p_3")}
          </p>
          <p>
            <strong>{t("box3h4")}</strong> {t("box3p_4")}
          </p>
        </div>
      </div>
      <div className="heading-container">
        <h3><Trans i18nKey={"articleh2"} components={{strong:<strong/>}}/></h3>
      </div>
      <div className="forms">
        <div className="form">
          <h5><Trans i18nKey={"box4h"} components={{strong:<strong/>}}/></h5>
          <br />
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLScB1_tQSv0aefpfI25oOJe_Rf9QCceRzMWKwT1AyLf7ln92SA/closedform"
            target="blank"
            className="button"
          >
            {t("boxbtn")}
          </Link>
        </div>
        <div className="form">
          <h5><Trans i18nKey={"box5h"} components={{strong:<strong/>}}/></h5> 
          <br />
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSciNlgrJH2BegMKts1rCMde3TlVpdZxqkAgPtWBZJkj_jr0ZQ/closedform"
            target="blank"
            className="button"
          >
            {t("boxbtn")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Article;
