import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./rti.css";

const Organisation_Function = () => {
  return (
    <>
      <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Disclosure Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colSpan={2}>Organisation and Function</td>
              </tr>
              <tr>
                <td>1.1</td>
                <td colSpan={2}>
                  Particulars of Organisation, Functions and Duties [ Section 4
                  (1) (b) (i) ]
                </td>
              </tr>
              <tr>
                <td>1.1.1</td>
                <td>Name and address of the organisation</td>
                <td>
                  <p>
                    Central Council for Research in Yoga and Naturopathy
                    Janakpuri, New Delhi, Delhi 110058.
                  </p>
                  <p>Website</p>
                  <p>
                    <Link to="/">Website Link</Link>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.1.2</td>
                <td>Head of the Organisation</td>
                <td>
                  <p>Dr. Raghavendra Rao M, Director</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:director-ccryn@nic.in">
                      director-ccryn@nic.in
                    </a>
                  </p>
                  <p>Tel No: 011-45649868</p>
                  <p>
                    Please click <Link to="/rti/organisation-and-function/director-profile">here</Link> to view the
                    Profile of the Director.
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.1.3</td>
                <td>Vision and Mission</td>
                <td>
                  <p>Vision</p>
                  <p>
                    To enable CCRYN to become a leading education and research
                    organization in yoga and naturopathy in the country by
                    enhancing research and catalyzing the development of these
                    systems for wellness and disease prevention.
                  </p>

                  <p>Mission</p>
                  <p>
                    To enhance knowledge and evidence of Yoga & Naturopathy
                    systems through education and research and enhance awareness
                    among the community for use of these systems. Development of
                    yoga and naturopathy system as lifestyle intervention will
                    go a long way in management of the rising burden of
                    non-communicable diseases in the country.
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.1.4</td>
                <td>Functions and Duties</td>
                <td>
                  <a href="/public/RTI-O_F/Function_duties.pdf">
                    Click here to view
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.1.5</td>
                <td>Organisation Chart</td>
                <td>
                  Please click{" "}
                  <a href="/public/RTI-O_F/OrganizationChart.pdf">here</a> to
                  view the chart
                </td>
              </tr>
              <tr>
                <td>1.1.6</td>
                <td>
                  Any other details-the genesis, inception, formation of the
                  department and the HoDs from time to time as well as the
                  committees/ Commissions consulted from time to time have been
                  dealt
                </td>
                <td>
                  <p>
                    1. Genesis, inception, formation of the department - 1978
                  </p>
                  <p>
                    2.{" "}
                    <a href="/public/RTI-O_F/Director's List_1.jpg">
                      List of Directors / HOD's
                    </a>
                  </p>
                  <p>3. Committees/ Commissions Consulted - SFC, SAC & GB</p>
                </td>
              </tr>
              <tr>
                <td>1.2</td>
                <td colSpan={2}>
                  Power and Duties of its Officers and Employees [ Section 4(1)
                  (b) (ii) ]
                </td>
              </tr>
              <tr>
                <td>1.2.1</td>
                <td>
                  Powers and Duties of Officers (administrative, financial and
                  judicial)
                </td>
                <td>
                  <a href="/public/RTI-O_F/Function_duties.pdf">
                    Click here to view
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.2.2</td>
                <td>Power and Duties of other Employees</td>
                <td>
                  <a href="/public/RTI-O_F/Function_duties.pdf">
                    Click here to view
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.2.3</td>
                <td>
                  Rules/ orders under which powers and duty are derived and
                </td>
                <td rowSpan={2}>
                  The allocation of work is under process due to joining of new
                  incumbents. Once completed, the same will be disclosed under
                  RTI Act, 2005.
                </td>
              </tr>
              <tr>
                <td>1.2.4</td>
                <td>Exercised</td>
              </tr>
              <tr>
                <td>1.2.5</td>
                <td>Work and Allocation</td>
                <td>As per the details in 1.2.1 and 1.2.2</td>
              </tr>
              <tr>
                <td>1.3</td>
                <td colSpan={2}>
                  Procedure followed in decision-making process [ Section 4(1)
                  (b) (iii) ]
                </td>
              </tr>
              <tr>
                <td>1.3.1</td>
                <td>
                  Process of decision making Identify key decision-making points
                </td>
                <td>
                  Decisions are taken in accordance with the provisions of the
                  Act/Statutes/Ordinances/Academic Rules & Regulations /
                  Policies, Rules etc. of the Institute received from Ministry
                  of Ayush and the decisions taken by SAC, SFC & GB from time to
                  time and procedures/practices of the Institute. Policy matters
                  are decided at the level of President of GB.
                </td>
              </tr>
              <tr>
                <td>1.3.2</td>
                <td>Final decision-making authority</td>
                <td>President of Governing Body</td>
              </tr>
              <tr>
                <td>1.3.3</td>
                <td>Related provisions, acts, rules etc.</td>
                <td>
                  <p>Please click the following link for details:</p>
                  <p>
                    <a href="/public/RTI-O_F/GFR2017.pdf">
                      General Financial Rules 2017
                    </a>
                  </p>
                  <p>
                    Government of India Rules and other Government
                    Directives/Order
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.3.4</td>
                <td>Time limit for taking decisions, if any</td>
                <td>
                  As per decision of GB/SFC/SAC and Ministry of Ayush, Govt. of
                  India
                </td>
              </tr>
              <tr>
                <td>1.3.5</td>
                <td>Channel of supervision and accountability</td>
                <td>
                  Please click{" "}
                  <a href="/public/RTI-O_F/OrganizationChart.pdf">here</a> to
                  view the Organisation Chart
                </td>
              </tr>
              <tr>
                <td>1.4</td>
                <td colSpan={2}>
                  Norms for Discharge of Functions [ Section 4 (1) (b) (iv) ]
                </td>
              </tr>
              <tr>
                <td>1.4.1</td>
                <td>Nature of functions/ services offered</td>
                <td>
                  <a href="/public/RTI-O_F/Bye_Laws_object.pdf">
                    Plase click here to View
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.4.2</td>
                <td>Norms/ standards for functions/ service delivery</td>
                <td>
                  <p>
                    Standard Operating Procedure (SOP) of Yoga and Naturopathy
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/SOP.pdf">
                      Please click here to view
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.4.3</td>
                <td>Process by which these services can be accessed</td>
                <td>
                  Needy person can visit our OPD/Wellness Centre/Hospitals for
                  access of services.
                </td>
              </tr>
              <tr>
                <td>1.4.4</td>
                <td>Time-limit for achieving the targets</td>
                <td>Not Applicable</td>
              </tr>
              <tr>
                <td>1.4.5</td>
                <td>Process of redressal of grievances</td>
                <td>
                  <p>
                    RTI applications can be filed{" "}
                    <a href="https://rtionline.gov.in/" target="blank">
                      here
                    </a>
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/Sexual_Harassment.pdf">
                      Please click here to view the committee of sexual
                      harassment
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.5</td>
                <td colSpan={2}>
                  Rules, Regulations, Instructions Manual and Records for
                  Discharging Functions [ Section 4 (1) (b) (v)]
                </td>
              </tr>
              <tr>
                <td>1.5.1</td>
                <td>Title and nature of the record/ manual /instruction</td>
                <td>
                  <a href="/public/RTI-O_F/Documents_Manuals.xlsx">
                    Document Manual
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.5.2</td>
                <td>
                  List of Rules, regulations, instructions manuals and records.
                </td>
                <td>
                  <a href="/public/RTI-O_F/Documents_Manuals.xlsx">
                    Document Manual
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.5.3</td>
                <td>Acts/ Rules manuals etc.</td>
                <td>
                  <p>Please click the following link for details.</p>
                  <p>
                    <a href="/public/RTI-O_F/Documents_Manuals.xlsx">
                      Document Manual
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.5.4</td>
                <td>Transfer Policy and Transfer Orders</td>
                <td>
                  <p>
                    Ministry of Ayush, vide letter No. L-19013/24/2020 - AS
                    dated 05.11.2020 has issued "Rotational Transfer Policy" for
                    implementation in all the research Councils under its aegis.
                    However, since the Council did not have any subordinate
                    offices till the year 2024, the council could not implement
                    the policy. With the inauguration of two CRIYNs at
                    Nagamangala (Karnataka) and jhajjar (Haryana) on 21.01.2024
                    and 25.02.2024, respectively, the Council is in the process
                    to fill up newly sanctioned posts at these institutes. Once
                    sanctioned posts are filled up, the Council will implement
                    the above said "Rotational Transfer Policy" of Ministry of
                    Ayushin letter and sprit.
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/Rotational_Transfer_Policy.pdf">
                      Click here
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.6</td>
                <td colSpan={2}>
                  Categories of Documents held by the Authority under its
                  Control [Section 4 (1) (b) (vi)]
                </td>
              </tr>
              <tr>
                <td>1.6.1</td>
                <td>Categories of documents</td>
                <td>
                  <a href="/public/RTI-O_F/Documents_Manuals.xlsx">
                    Document Manual
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.6.2</td>
                <td>Custodian of documents / categories</td>
                <td>
                  <a href="/public/RTI-O_F/Documents_Manuals.xlsx">
                    Document Manual
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.7</td>
                <td colSpan={2}>
                  Boards, Councils, Committees and other Bodies constituted as
                  part of the Public Authority [Section 4(1)(b)(viii)]
                </td>
              </tr>
              <tr>
                <td>1.7.1</td>
                <td>Name of Boards, Council, Committee etc.</td>
                <td>
                  <p>
                    <a href="/public/RTI-O_F/GB_Committee.pdf">Member of GB</a>
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/SFC_Committee.pdf">
                      Member of SFC
                    </a>
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/SAC_Committee.pdf">
                      Member of SAC
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.7.2</td>
                <td>Composition</td>
                <td>Mention in point no. 1.7.1</td>
              </tr>
              <tr>
                <td>1.7.3</td>
                <td>Dates from which constituted</td>
                <td>Mention in point no. 1.7.1</td>
              </tr>
              <tr>
                <td>1.7.4</td>
                <td>Term / Tenure</td>
                <td>3 Years</td>
              </tr>
              <tr>
                <td>1.7.5</td>
                <td>Powers and Functions</td>
                <td>As per 1.7.1</td>
              </tr>
              <tr>
                <td>1.7.6</td>
                <td>Whether their meetings are open to the public?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>1.7.7</td>
                <td>
                  Whether the minutes of the meetings are open to the public?
                </td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>1.7.8</td>
                <td>
                  Place where the minutes if open to the public are available?
                </td>
                <td>
                  <p>
                    Minutes of the GB Meetings (
                    <a href="/public/RTI-O_F/GB_Minutes.pdf">GB Meeting</a>)
                  </p>
                  <p>
                    Minutes of the SAC Meetings (
                    <a href="/public/RTI-O_F/SAC_Minutes.pdf">SAC Meeting</a>)
                  </p>
                  <p>
                    Minutes of the SFC Meetings (
                    <a href="/public/RTI-O_F/SFC_Minutes.pdf">SFC Meeting</a>)
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.8</td>
                <td colSpan={2}>
                  Directory of Officers and Employees [Section 4 (1) (b) (ix)]
                </td>
              </tr>
              <tr>
                <td>1.8.1</td>
                <td>Name and designation</td>
                <td>
                  Please Click <a href="/public/RTI-O_F/Directory.pdf">here</a>{" "}
                  for the details
                </td>
              </tr>
              <tr>
                <td>1.8.2</td>
                <td>Telephone, fax and email</td>
                <td>
                  Please Click <a href="/public/RTI-O_F/Directory.pdf">here</a>{" "}
                  for the details
                </td>
              </tr>
              <tr>
                <td>1.9</td>
                <td colSpan={2}>
                  Monthly Remuneration received by Officers and Employees
                  including system of compensation [Section 4(1) (b) (x)]
                </td>
              </tr>
              <tr>
                <td>1.9.1</td>
                <td>List of employees with Gross monthly remuneration</td>
                <td>
                  <a href="/public/RTI-O_F/monthly_remuneration.pdf">
                    The Monthly Remuneration recieved by each officer and
                    employee
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.9.2</td>
                <td>System of compensation as provided in its regulations</td>
                <td>As per available records, no such system available.</td>
              </tr>
              <tr>
                <td>1.10</td>
                <td colSpan={2}>
                  Name, Designation and other particulars of Public Information
                  Officers [Section 4 (1) (b) (xvi)]
                </td>
              </tr>
              <tr>
                <td>1.10.1</td>
                <td>
                  <p>
                    Name and designation of the Central Public Information
                    Officer (CPIO)
                  </p>
                  <p>
                    Assistant Public Information Officer (APIO) and Appellate
                    Authority
                  </p>
                </td>
                <td>
                  <p>Current CPIO</p>
                  <p>Central Public Information Officer</p>
                  <p>(From 18-07-2024 to till date)</p>
                  <p>Sh. Surender Sandhu</p>
                  <p>
                    Asst. Director (Yoga), Central Council for Research in Yoga
                    & Naturopathy (CCRYN), Ministry of Ayush, Government of
                    India.
                  </p>
                  <p>Appellate Authority</p>
                  <p>(From 17-10-2019 to till date)</p>
                  <p>Dr. Raghavendra Rao M</p>
                  <p>
                    Director, Central Council for Research in Yoga & Naturopathy
                    (CCRYN), Ministry of Ayush, Government of India.
                  </p>
                  <br />
                  <p>Assistant Public Information Officer</p>
                  <p>(2016 to till date)</p>
                  <p>Mr. Satish Kumar</p>
                  <p>
                    Jr. Hindi Translator, Central Council for Research in Yoga &
                    Naturopathy (CCRYN), Ministry of Ayush, Government of India.
                  </p>
                </td>
              </tr>
              <tr>
                <td>1.10.2</td>
                <td>
                  Address, telephone numbers and email of each designated
                  official
                </td>
                <td>
                  <a href="/public/RTI-O_F/Contact_Details_of_Officials_dealing_with_RTI.pdf">
                    Please click here for viewing the Contact Details of the
                    Officials dealing with RTI
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.11</td>
                <td colSpan={2}>
                  No. of employees against whom Disciplinary Action has been
                  proposed / taken [Section 4(2)]
                </td>
              </tr>
              <tr>
                <td>1.11.1</td>
                <td>
                  No. of employees against whom disciplinary action has been (i)
                  Pending for Minor penalty or major penalty proceedings
                </td>
                <td>NIL</td>
              </tr>
              <tr>
                <td>1.11.2</td>
                <td>
                  (ii) Finalised for Minor penalty or major penalty proceedings
                </td>
                <td>NIL</td>
              </tr>
              <tr>
                <td>1.12</td>
                <td colSpan={2}>
                  Programmes to Advance Understanding of RTI [Section 26]
                </td>
              </tr>
              <tr>
                <td>1.12.1</td>
                <td>Educational Programmes</td>
                <td>
                  <a href="/public/RTI-O_F/RTI_Training_cum_Awareness_Session.pdf">
                    Click here to get details
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.12.2</td>
                <td>
                  Efforts to encourage public authority to participate in these
                  programmes
                </td>
                <td>
                  <a href="/public/RTI-O_F/education_Awareness.pdf">
                    Click here to get the details
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.12.3</td>
                <td>Training of CPIO/APIO</td>
                <td>
                  <a href="/public/RTI-O_F/education_Awareness.pdf">
                    Click here to get details
                  </a>
                </td>
              </tr>
              <tr>
                <td>1.12.4</td>
                <td>
                  Update & publish guidelines on RTI by the Public Authorities
                  concerned
                </td>
                <td>
                  <Link href="/rti">
                    Please click here for viewing the Suo Moto Disclosure in the
                    Council Website
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1.13</td>
                <td colSpan={2}>Transfer Policy and Transfer Orders</td>
              </tr>
              <tr>
                <td>1.13.1</td>
                <td>Transfer Policy and Transfer Orders</td>
                <td>
                  <p>
                    Ministry of Ayush, vide letter No. L-19013/24/2020 - AS
                    dated 05.11.2020 has issued "Rotational Transfer Policy" for
                    implementation in all the research Councils under its aegis.
                    However, since the Council did not have any subordinate
                    offices till the year 2024, the council could not implement
                    the policy. With the inauguration of two CRIYNs at
                    Nagamangala (Karnataka) and jhajjar (Haryana) on 21.01.2024
                    and 25.02.2024, respectively, the Council is in the process
                    to fill up newly sanctioned posts at these institutes. Once
                    sanctioned posts are filled up, the Council will implement
                    the above said "Rotational Transfer Policy" of Ministry of
                    Ayushin letter and sprit.
                  </p>
                  <p>
                    <a href="/public/RTI-O_F/Rotational_Transfer_Policy.pdf">
                      Click here
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        <Outlet />
      </div>

      {/* <div>
        <h1>Organisation_function</h1>
        <Link to="profile">Profile</Link>
        <div className="column">
          <Outlet/>
        </div>
      </div> */}
    </>
  );
};

export default Organisation_Function;
