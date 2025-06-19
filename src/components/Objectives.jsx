import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './article.css'
import { useTranslation } from 'react-i18next'

function Objectives() {
  const {t}=useTranslation()
  return (
    <>
        <Header/>
        <Content/>
        <div className="container">
          <div className="objective-box">
            <h3 className='heading-1'>{t("objectives")}</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><span className='title'>{t("objs1")}</span>{t("obj1")}</li>
              <li className='list-group-item'><span className='title'>{t("objs2")}</span>{t("obj2")}</li>
              <li className='list-group-item'><span className='title'>{t("objs3")}</span>{t("obj3")}</li>
              <li className='list-group-item'><span className='title'>{t("objs4")}</span>{t("obj4")}</li>
              <li className='list-group-item'><span className='title'>{t("objs5")}</span>{t("obj5")}</li>
              <li className='list-group-item'><span className='title'>{t("objs6")}</span>{t("obj6")}</li>
              <li className='list-group-item'><span className='title'>{t("objs7")}</span>{t("obj7")}</li>
              <li className='list-group-item'><span className='title'>{t("objs8")}</span>{t("obj8")}</li>
              <li className='list-group-item'><span className='title'>{t("objs9")}</span>{t("obj9")}</li>
              <li className='list-group-item'><span className='title'>{t("objs10")}</span>{t("obj10")}</li>
              <li className='list-group-item'><span className='title'>{t("objs11")}</span>{t("obj11")}</li>
            </ul>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Objectives