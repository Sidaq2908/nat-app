import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, Outlet } from 'react-router-dom'
import './rti.css'
import { useTranslation } from 'react-i18next'

function RTI() {
  const {t} = useTranslation()
  return (
    <>
      <Header />
      <div className="rti-container">
        <nav className="nav flex-column">
          <NavLink className="nav-link" to="organisation-and-function" >{t("rtinav1")}</NavLink>
          <NavLink className="nav-link" to="budget-and-programs">{t("rtinav2")}</NavLink>
          <NavLink className="nav-link" to="publicity-and-public-interface">{t("rtinav3")}</NavLink>
          <NavLink className="nav-link" to="e-governance">{t("rtinav4")}</NavLink>
          <NavLink className="nav-link" to="information-as-may-be-prescribed">{t("rtinav5")}</NavLink>
          <NavLink className="nav-link" to="information-disclosed-on-own-initiative">{t("rtinav6")}</NavLink>
        </nav>
        <article>
          <div className="container">
             <Outlet/>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default RTI