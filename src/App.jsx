import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Objectives from './components/Objectives'
import Downloads from './components/Downloads'
import Gallery from './components/Gallery'
import Notice from './components/Notice'
import Conference from './components/Conference'
import NaturopathyAct from './components/NaturopathyAct'
import PMYoga from './components/PMYoga'
import Result from './components/Result'
import RTI from './components/RTI'
import Tender from './components/Tender'
import Vacancy from './components/Vacancy'
import Organisation_Function from './components/Organisation_Function'
import Budget_Programs from './components/Budget_Programs'
import Public_Affair from './components/Public_Affair'
import EGovernance from './components/EGovernance'
import InformationPres from './components/InformationPres'
import InformationDis from './components/InformationDis'
import Profile from './components/Profile'

const App = () => {
   useEffect(()=>{
        document.title="7th Naturopathy Day";
   },[]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/objectives' element={<Objectives />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/conference-schedule' element={<Conference />} />
        <Route path='/naturopathy-day-activities' element={<NaturopathyAct />} />
        <Route path='/guidelines-of-pm-yoga-awards-2025' element={<PMYoga />} />
        <Route path='/result' element={<Result />} />
        <Route path='/rti' element={<RTI />}>
          <Route path='/rti/organisation-and-function' element={<Organisation_Function />} />
          <Route path='/rti/organisation-and-function/director-profile' element={<Profile />} />
          <Route path='/rti/budget-and-programs' element={<Budget_Programs />} />
          <Route path='/rti/publicity-and-public-interface' element={<Public_Affair />} />
          <Route path='/rti/e-governance' element={<EGovernance />} />
          <Route path='/rti/information-as-may-be-prescribed' element={<InformationPres />} />
          <Route path='/rti/information-disclosed-on-own-initiative' element={<InformationDis />} />
        </Route>
        <Route path='/tender' element={<Tender />} />
        <Route path='/vacancy' element={<Vacancy />} />
      </Routes>
    </>
  )
}

export default App