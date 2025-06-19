import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

function Result() {
    const pdf_titles=[
      { 
         link:'public/Result/Research_Officer_06022025.pdf',
         title:'Result of Research Officer',
         download:'Research_Officer_06022025.pdf'
      },
      { 
         link:'public/Result/Medical_Officer_(Allopathy)_06022025.pdf',
         title:'Result of medical Officer (Allopathy)',
         download:'Medical_Officer_(Allopathy)_06022025.pdf'
      },
      { 
         link:'public/Result/Research_Officer_(Life sciences)_06022025.pdf',
         title:'Result of Research Officer (Life sciences)',
         download:'Research_Officer_(Life sciences)_06022025.pdf'
      },
      { 
         link:'public/Result/List_of_candidate_for_interview.pdf',
         title:'Decision of screening committee for admission of candidates for interview for the post of Research Officer (Yoga & Naturopathy)',
         download:'List_of_candidate_for_interview.pdf'
      },
      { 
         link:'public/Result/Research_Officer_203.pdf',
         title:'Notification for interview for the post of Research Officer (Life Sciences), Research Officer (Clinical Psychology) and Medical Officer (Allopathy)',
         download:'Research_Officer_203.pdf'
      },
      { 
         link:'public/Result/Research_Officer_202.pdf',
         title:'Notification for interview for the post of Research Officer (Yoga & Naturopathy)',
         download:'Research_Officer_202.pdf'
      },
      { 
         link:'public/Result/Result_Yogatech_Challenge.pdf',
         title:'Result of Yogatech Challenge 2024',
         download:'Result_Yogatech_Challenge.pdf'
      },
      { 
         link:'public/Result/Document_Verification.pdf',
         title:`Document verification of shortlisted candidate's for the post of 1. Statistical Assiatant 2. Assistant/ Assistant Section Officer 3. Accountant 4. Multi-Tasking Staff`,
         download:'Document_Verification.pdf'
      },
      { 
         link:'public/Result/Shortlisted_Companies_for_Pitching_for_YogaTechChallenge2024.pdf',
         title:'List of Shortlisted Companies for Pitching in the Yogatech Challenge 2024',
         download:'Shortlisted_Companies_for_Pitching_for_YogaTechChallenge2024.pdf'
      },
      { 
         link:'public/Result/Assistant_or_ASO.pdf',
         title:'Merit list of recruitment examination for the post of Assistant/ ASO',
         download:'Assistant_or_ASO.pdf'
      },
      { 
         link:'public/Result/Office_Superintendent.pdf',
         title:'List of candidates shortlisted for second stage of examination for the post of Office Superintendent',
         download:'Result/Office_Superintendent.pdf'
      },
      { 
         link:'public/Result/Junior_Stenographer_(E).pdf',
         title:'List of candidates shortlisted for skill test for the post of Junior Stenographer (English)',
         download:'Junior_Stenographer_(E).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_RO_(Y&N).pdf',
         title:'List of candidates shortlisted for interview for the post of Research Officer (Yoga & Naturopathy) against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_RO_(Y&N).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_RO_(CP).pdf',
         title:'List of candidates shortlisted for interview for the post of Research Officer (Clinical Psychology) against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_RO_(CP).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_RO_(LS).pdf', 
         title:'List of candidates shortlisted for interview for the post of Research Officer (Life Sciences) against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_RO_(LS).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_RO_(NP).pdf',
         title:'List of candidates shortlisted for interview for the post of Research Officer (Neurophysiology) against Direct Recruitment advertisement dated 15.01.2024 ',
         download:'Result_Notification_for_the_post_of_RO_(NP).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_Medical_Officer_(Allopathy).pdf',
         title:'List of candidates shortlisted for interview for the post of Medical Officer (Allopathy) against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_Medical_Officer_(Allopathy).pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_Statistical_Assistant.pdf',
         title:'List of candidates shortlisted for the post of Statistical Assistant against Direct Recruitment advertisement dated 15.01.2024 ',
         download:'Result_Notification_for_the_post_of_Statistical_Assistant.pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_Accountant.pdf',
         title:'List of candidates shortlisted for the post of Accountant against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_Accountant.pdf'
      },
      { 
         link:'public/Result/Result_Notification_for_the_post_of_MTS.pdf',
         title:'List of candidates shortlisted for the post of Multi-Tasking Staff against Direct Recruitment advertisement dated 15.01.2024',
         download:'Result_Notification_for_the_post_of_MTS.pdf'
      },
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
          <h3 className='heading-1'>{t("result")}</h3>
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

export default Result