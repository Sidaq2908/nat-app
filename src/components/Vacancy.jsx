import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

function Vacancy() {
  const pdf_titles=[
    {
      link:'/public/Vacancy/Yoga_Therapist.pdf',
      title:'Walk-in interview for filling up of posts under Extramural Research Project CCRYN-Collaborative Centre for Mind Body Interventions Through Yoga (CCMBIY) funded by Central Council of Research in Yoga & Naturopathy (CCRYN) under Principal Investigator, AIIMS, Rishikesh purely on a contractual basis ',
      download:'Yoga_Therapist.pdf'
    },
    {
      link:'public/Vacancy/second stage 09.05.2025.pdf',
      title:'Second Stage of Examination for the Post of Office Superintendent, Junior Hindi Translator and Junior Stenographer (English) to be held on 21-05-2025',
      download:'second stage 09.05.2025.pdf'
    },
    {
      link:'public/Vacancy/Corrigendum 05.05.2025.pdf',
      title:'CORRIGENDUM 05.05.2025',
      download:'Corrigendum 05.05.2025.pdf'
    },
    {
      link:'public/Vacancy/Advertisement 02 April, 2025.pdf',
      title:'Advertisement for the filling up of contractual position of Yoga & Naturopathy Research Expert (Domain Expert) and Consultant (Admn.)',
      download:'Advertisement 02 April, 2025.pdf'
    },
    {
      link:'public/Vacancy/post_01.pdf',
      title:'Scheme of Second Stage of Examination for the Post of Office Superintendent, Junior Hindi Translator and Junior Stenographer (English)',
      download:'post_01.pdf'
    },
    {
      link:'public/Vacancy/Recruitment_advert_060125.pdf',
      title:'Regular posts advertised on direct recruitment basis, it has been decided by the Competent Authority to cancel the recruitment on following post due to administrative reasons',
      download:'Recruitment_advert_060125.pdf'
    },
    {
      link:'public/Vacancy/Advertisement_02.pdf',
      title:'Advertisement for Walk-in-Interview for the position of Consultant (Admn.) purely on contractual basis in CCRYN - reg.',
      download:'Advertisement_02.pdf'
    },
    {
      link:'public/Vacancy/Advertisement_.pdf',
      title:'DETAILED VACANCY NOTICE/ ADVERTISEMENT FOR THE POST OF ‘ADMINISTRATIVE-CUM-ACCOUNTS OFFICER’ IN CCRYN',
      download:'Advertisement_.pdf'
    },
    {
      link:'public/Vacancy/Cancellation_of_contractual_engagement.pdf',
      title:'Cancellation of Contractual Engagement against Advertisement No. 4-6/2023-24/CCRYN/Estt./Rec. dated 28.12.2023',
      download:'Cancellation_of_contractual_engagement.pdf'
    },
    {
      link:'public/Vacancy/Hindi_Exam_pattern_syllabus_07062024.pdf',
      title:'Pattern and Syllabus of Hindi Language Examination for the post of Assistant / Assistant Section Officer to be held on 20th June, 2024 - reg.',
      download:'Hindi_Exam_pattern_syllabus_07062024.pdf'
    },
    {
      link:'public/Vacancy/Hindi_Language_Test_04062024.pdf',
      title:' Schedule of Hindi Language Test for the post of Assistant / Assistant Section Officer',
      download:'Hindi_Language_Test_04062024.pdf'
    },
    {
      link:'public/Vacancy/TATC_15th_June010624.pdf',
      title:' TATC course admissions date extended upto 15 June 2024',
      download:'TATC_15th_June010624.pdf'
    },
    {
      link:'public/Vacancy/Notice_for_reschedule_310524.pdf',
      title:' Re-schedule of Walk-in-Interview for the position of Consultant (Admn.), Consultant (IT) and Consultant (Social Media) - reg.',
      download:'Notice_for_reschedule_310524.pdf'
    },
    {
      link:'public/Vacancy/Advertisement_1.pdf',
      title:' Advertisement for the position of Consultant (Y&N) - reg. ',
      download:'Advertisement_1.pdf'
    },
    {
      link:'public/Vacancy/Advertisement.pdf',
      title:'Advertisement for the post of Consultant (Admn.), Consultant (IT), Consultant (Social Media) - reg.',
      download:'Advertisement.pdf'
    },
    {
      link:'public/Vacancy/TATC_31st_may.pdf',
      title:' TATC course admissions date extended upto 31st may 2024',
      download:'TATC_31st_may.pdf'
    },
    {
      link:'public/Vacancy/adv_09042024.pdf',
      title:' TATC course admissions date extended upto 30th April 2024',
      download:'adv_09042024.pdf'
    },
    {
      link:'public/Vacancy/Recruitment_Notice_22032024.pdf',
      title:' Link for grievances related to question paper of Computer Based Test held on 21st and 22nd March,2024',
      download:'Recruitment_Notice_22032024.pdf'
    },
    {
      link:'public/Vacancy/Notification_13032024.pdf',
      title:' Examination date and time for various post of CCRYN and its CRIYN (Jhajjar & Nagamangala)',
      download:'Notification_13032024.pdf'
    },
    {
      link:'public/Vacancy/Notice_12032024.pdf',
      title:' Date of interview for the position of Yoga Therapist and Naturopathy Therapist on contractual basis',
      download:'Notice_12032024.pdf'
    },
    {
      link:'public/Vacancy/Notification_07032024.pdf',
      title:' Notification for re-scheduling of interview / interaction for the position of Yoga Therapist and Naturopathy Therapist on contractual basis',
      download:'Notification_07032024.pdf'
    },
    {
      link:'public/Vacancy/TATC_advertisement_19022024.pdf',
      title:' TATC advertisement',
      download:'TATC_advertisement_19022024.pdf'
    },
    {
      link:'public/Vacancy/Scheme_of_examination_and_Syllabus_250124.pdf',
      title:' Scheme of Examination and Syllabus',
      download:'Scheme_of_examination_and_Syllabus_250124.pdf'
    },
    {
      link:'public/Vacancy/Corrigendum_15_01_2024.pdf',
      title:' Corrigendum to Advertisement dated 15.01.2024',
      download:'Corrigendum_15_01_2024.pdf'
    },
    {
      link:'public/Vacancy/CCRYN_Recruitment_Advt_Eng_15012024.pdf',
      title:' Online applications are invited from the eligible candidates for direct recruitment for various posts on regular basis for All India open competition. (ENGLISH)',
      download:'CCRYN_Recruitment_Advt_Eng_15012024.pdf'
    },
    {
      link:'public/Vacancy/CCRYN_Recruitment_Advt_Hin_15012024.pdf',
      title:' Online applications are invited from the eligible candidates for direct recruitment for various posts on regular basis for All India open competition. (Hindi)',
      download:'CCRYN_Recruitment_Advt_Hin_15012024.pdf'
    },
    {
      link:'public/Vacancy/Corrigendum_04012024.pdf',
      title:'Corrigendum',
      download:'Corrigendum_04012024.pdf'
    },
    {
      link:'public/Vacancy/corrigendum_02012024.pdf',
      title:' Corrigendum',
      download:'corrigendum_02012024.pdf'
    },
    {
      link:'public/Vacancy/Advt_Regular_Contractual_Application_291223.pdf',
      title:' VACANCY NOTICE / ADVERTISEMENT FOR VARIOUS POSITIONS IN CRIYN, JHAJJAR (HARYANA) AND NAGAMANGALA (KARNATAKA) ',
      download:'Advt_Regular_Contractual_Application_291223.pdf'
    },
    {
      link:'public/Vacancy/Addendum.pdf',
      title:' Walk-in-Interview which is going to be held on 06.11.2023 ',
      download:'Addendum.pdf'
    },
    {
      link:'public/Vacancy/advs_ccryn.pdf',
      title:'Notice for engagement of contractual staff in CRIYN, Haryana, Karnataka and CCRYN Hqrs., New Delhi',
      download:'advs_ccryn.pdf'
    },
    {
      link:'public/Vacancy/NoticeforWalk-in-Interview.pdf',
      title:'Notice for Walk-in-Interview',
      download:'NoticeforWalk-in-Interview.pdf'
    },
    {
      link:'public/Vacancy/corrigendum.pdf',
      title:' Corrigendum',
      download:'corrigendum.pdf'
    },
    {
      link:'public/Vacancy/notice.pdf',
      title:' Notification 28/08/2023 ',
      download:'notice.pdf'
    },
  ];

  const list = pdf_titles.map((item,index) => (
      <li className='list-group-item' key={index}>
          <h6>
            <GrDocumentPdf size={30} />
            <a href={item.link} target="_blank" rel="noopener noreferrer" download={item.download}>
              &nbsp;&nbsp;
             {item.title}
            </a>
          </h6>
      </li>
    ));

    const {t} = useTranslation();
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("vacancy")}</h3>
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

export default Vacancy