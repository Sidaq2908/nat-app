import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';


function PMYoga() {
   const pdf_titles=[
    {
       link:'public/Guidelines/Guidelines.pdf',
       title:`Guidelines of Prime Minister’s Award for Yoga 2025`,
       download:'Guidelines.pdf'
    }
   ];
   
   const list = pdf_titles.map((item,index)=>(
           <li className='list-group-item' key={index}>
             <h6 className='save'>
               <GrDocumentPdf size={30} />
               <a href={item.link} target="_blank" rel="noopener noreferrer" download={item.download}>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 {item.title}
               </a>
             </h6>
           </li>
       ));
       const {t}= useTranslation();
  return (
      <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("guidelines")}</h3>
          <ul className='list-group list-group-flush'>
            {
              list
            }
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PMYoga