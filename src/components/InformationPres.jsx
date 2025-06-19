import React from 'react'
import './rti.css'

const InformationPres = () => {
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
              <th>SNo.</th>
              <th>Item</th>
              <th>Disclosure Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5</td>
                <td colSpan={2}>Information as may be Prescribed</td>
            </tr>
            <tr>
                <td>5.1</td>
                <td colSpan={2}>Such other Information as may be Prescribed [F. No. IRMRA/Audit/RTI/2023/3/243]</td>
            </tr>
            <tr>
                <td>5.1.1</td>
                <td>Name and details of (a) Current CPIO and FAAs, (b) Earlier CPIO and FAAs from 1.1.2015</td>
                <td>
                    <p>(a) Current CPIO</p>
                    <p>Central Public Information Officer</p>
                    <p>(From 18-07-2024 to till date)</p>
                    <p>Sh. Surender Sandhu</p>
                    <p>Asst. Director (Yoga), Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>Current FAA</p>
                    <p>Dr. Raghavendra Rao M</p>
                    <p>Director, Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>Appellate Authority</p>
                    <p>(From 17-02-2019 to till date)</p>
                    <p>Dr. Raghavendra Rao M</p>
                    <p>Director, Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>Assistant Public Information Officer</p>
                    <p>(2016 to till date)</p>
                    <p>Mr. Satish Kumar</p>
                    <p>Jr. Hindi Translator, Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>(b) Earlier CPIO</p>
                    <p>(From 29-09-2023 to 28-06-2024)</p>
                    <p>Dr. A. Mohana Rao</p>
                    <p>Asst. Director (Naturopathy), Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>Earlier FAA</p>
                    <p>Dr.Raghavendra Rao M</p>
                    <p>Director, Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <br />
                    <p>Appellate Authority</p>
                    <p>(From 09-09-2014 to 17-02-2019)</p>
                    <p>Dr. Ishwar N. Acharya</p>
                    <p>Director, Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                </td>
            </tr>
            <tr>
                <td>5.1.2</td>
                <td>Details of third-party audit of voluntary disclosure (a) Dates of audit carried out (b) Report of the audit carried out</td>
                <td><a href="/public/Information_Prescribed/Transparency_Audit_Report_2023_24.pdf">Transparency Audit Report 2023-24</a></td>
            </tr>
            <tr>
                <td>5.1.3</td>
                <td>Appointment of Nodal Officers not below the rank of Joint Secretary/ Additional HoD (a) Date of appointment, (b) Name and Designation of the officers</td>
                <td>
                    <p>Sh. Surender Sandhu</p>
                    <p>Asst. Director (Yoga), Central Council for Research in Yoga & Naturopathy (CCRYN), Ministry of Ayush, Government of India.</p>
                    <p>wef 01.07.2024</p>
                    <p>Phone No. +91 9990204555, Email ID: adyoga-ccryn@nic.in</p>
                </td>
            </tr>
            <tr>
                <td>5.1.4</td>
                <td>Consultancy committee of key stake holders for advice on Suo Moto Disclosure (a) Dates from which constituted, (b)Name and Designation of the officers</td>
                <td><a href="/public/Information_Prescribed/Su_moto_disclosure_committee.pdf">Click here to view</a></td>
            </tr>
            <tr>
                <td>5.1.5</td>
                <td>Committee of PIOs/FAAs with rich experience in RTI to identify frequently sought information under RTI (a) Dates from which constituted, (b)Name and Designation of the Officers</td>
                <td><a href="/public/Information_Prescribed/PIO_committee.pdf">Click here to view</a></td>
            </tr>
        </tbody>
    </table>
  )
}

export default InformationPres