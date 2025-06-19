import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { GrDocumentPdf } from "react-icons/gr";
import Downloads from './Downloads';
import { useTranslation } from 'react-i18next';

function Notice() {
  const pdf_titles=[
    { 
      link:'public/Notice/EOI.pdf',
      title:'Expression of Interest (EOI) for Participation in IDY Signature Events 2025 ',
      download:'EOI.pdf'
    },
    { 
      link:'public/Notice/NMPB_Circular.pdf',
      title:'Preparation of Panel of engagement of One (01) Project Consultant (Marketing) on Contractual basis in NMPB, Ministry of Ayush -reg ',
      download:'NMPB_Circular.pdf'
    },
    { 
      link:'public/Notice/CCRH.pdf',
      title:'Application for the post of Assistant Director(Admn.) ',
      download:'CCRH.pdf'
    },
    { 
      link:'public/Notice/NMPB_.pdf',
      title:'Preparation of Panel for engagement of One (01) Project Manager and three (03) Project Consultants on Contractual basis in NMPB, Ministry of Ayush-reg. ',
      download:'NMPB_.pdf'
    },
    { 
      link:'public/Notice/Date_of_Pitching_for_the_Yogatech_Chlallenge_2024.pdf',
      title:'Date of Pitching & other information for the Yogatech Challenge 2024. ',
      download:'Date_of_Pitching_for_the_Yogatech_Chlallenge_2024.pdf'
    },
    { 
      link:'public/Notice/NMPB.pdf',
      title:'Preparation of panel for engagement post on contractual basis in NMPB, Ministry of AYUSH',
      download:'NMPB.pdf'
    },
    { 
      link:'public/Notice/MDNIY.pdf',
      title:'Post on deputation basis in the MDNIY, Ministry of AYUSH, Govt. of India, New Delhi',
      download:'MDNIY.pdf'
    },
    { 
      link:'public/Notice/एनएमपीबी_आयुष_मंत्रालय_में_संविदा_के_आधार.pdf',
      title:'एनएमपीबी, आयुष मंत्रालय में संविदा के आधार पर एक (01) प्रोग्राम मैनेजर, एक (01) डोमेन विशेषज्ञ, पांच (05) परियोजना प्रबंधन परामर्शदाता और एक (01 कनिष्ठ परामर्शदाता की नियुक्ति के लिए पैनल तैयार करने के संबंध में।',
      download:'एनएमपीबी_आयुष_मंत्रालय_में_संविदा_के_आधार.pdf'
    },
    { 
      link:'public/Notice/CGHS.pdf',
      title:'Yoga & Naturopathy Treatments to CGHS Beneficiaries under CCRYN Hospitals at (1) CRIYN, Rohini Delhi (2) CRIYN, Deverkhana, Jhajjar, Haryana and (3) CRIYN, Nagamangala, Mandya District, Karnataka',
      download:'CGHS.pdf'
    },
  ];
  const list= pdf_titles.map((item,index)=>(
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
  const {t}=useTranslation();
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("notice")}</h3>
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

export default Notice