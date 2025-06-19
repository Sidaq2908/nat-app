import React from "react";
import img from "../images/Director_ccryn_.png";

const Profile = () => {
  return (
      <div className="column">
        <div className="column2">
          <div className="aboutimg">
            <img src={img} alt="" />
          </div>
          <div className="about">
            <div className="heading">
              <h4>ABOUT</h4>
            </div>
            <div className="content">
              <p>
                Dr. Raghavendra Rao Mohan completed his Bachelor’s degree in
                Naturopathy and Yogic Sciences with second rank from Mangalore
                University in 1998. He joined Swami Vivekananda Yoga Anusandhan
                Samsthana, Bengaluru as a research fellow in 1998 and went onto
                become an assistant professor. He has completed several research
                projects in Rheumatoid arthritis, Prediabetes, Diabetes, CVD
                risk prevention and Cancer using both yoga and naturopathy
                interventions.
              </p>
              <p>
                He has experience in working in reputed institutes like Swami
                Vivekananda Yoga University, and HCG Bangalore Institute of
                Oncology. He was an advisor to INYS Medical Research Society,
                Jindal Nature cure Hospital, and Trans Disciplinary University
                at Bengaluru. He was a collaborator and Osher (Planning
                International Centers for Research and Collaboration) NIH fellow
                at UCSF School of medicine, Sanfrancisco from 2004-2006. He
                completed Indo US study on yoga and Prediabetes, and yoga and
                HIV with UCSF School of Medicine Sanfrancisco. He was also a
                consultant for an NCI grant on yoga and Breast Cancer at MD
                Anderson Cancer Center, Houston, Texas. He completed his PhD in
                2007 and joined Health Care Global Enterprises Ltd., South East
                Asia’s Largest Network of Oncology Hospitals as a Senior
                Scientist and Head CAM program. He has 109 international
                research publications and two international book chapters with
                h-Index of 23{" "}
                <a href="https://www.researchgate.net/profile/Raghavendra-Rao-6.">
                  https://www.researchgate.net/profile/Raghavendra-Rao-6.
                </a>
              </p>
              <p>
                He has won several awards such as Sushila Thakur Prakriti mandir
                prize in 2001 by APPICON, Manonmani Rudraiah award from SVYASA
                for best thesis and ASCO Conquer cancer foundation merit award
                in 2012 by American Society of Clinical Oncology. He has
                conducted workshops in Melbourne and Malaysia in UICC Congress.
                He was a Co-Chair for Yoga at Society for Integrative Oncology,
                USA. He has set up a Department of CAM at Health Care Global
                Enterprises which has been accredited by European Society for
                Medical Oncology (ESMO) for Integrative Oncology in 2014. He has
                experience in conducting global clinical trials, Managing
                Biorepository, Cancer Registry, Clinical Repository, Clinical
                Audit and EHR. He has also under gone NABH assessor training by
                QCI. He is currently the Director, Central Council for Research
                in Yoga and Naturopathy, Ministry of AYUSH, Govt of India since
                2019.He is also the editor for Indian Journal for Yoga and
                Naturopathy, a journal from CCRYN, Ministry of Ayush.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
