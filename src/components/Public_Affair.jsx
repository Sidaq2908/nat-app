import React from 'react'
import { Link } from 'react-router-dom'
import './rti.css'

const Public_Affair = () => {
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>Disclosure Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Publicity and Public Interface</td>
                </tr>
                <tr>
                    <td>3.1</td>
                    <td colSpan={2}>Particulars for any arrangement for consultation with or representation by the members of the public in relation to the formulation of policy or implementation there of [Section 4(1)(b)(vii)]</td>
                </tr>
                <tr>
                    <td>3.1.1</td>
                    <td>Relevant Acts, Rules, Forms and other documents which are normally accessed by citizens</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.2</td>
                    <td>Arrangements for consultation with or representation by - (a) Members of the public in policy formulation/ policy implementation, (b) Day & time allotted for visitors, (c) Contact details of Information & Facilitation Counter (IFC) to provide publications frequently sought by RTI applicants</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.3</td>
                    <td>Public- private partnerships (PPP)- Details of Special Purpose Vehicle (SPV), if any</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.4</td>
                    <td>Public- private partnerships (PPP)- Detailed project reports (DPRs)</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.5</td>
                    <td>Public- private partnerships (PPP)- Concession agreements.</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.6</td>
                    <td>Public- private partnerships (PPP)- Operation and maintenance manuals</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.7</td>
                    <td>Public- private partnerships (PPP) - Other documents generated as per the implementation of the PPP</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.8</td>
                    <td>Public- private partnerships (PPP) - Information relating to fees, tolls, or the other kinds of revenues that may be collected under authorisation from the government</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.9</td>
                    <td>Public- private partnerships (PPP) -Information relating to outputs and outcomes</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.10</td>
                    <td>Public- private partnerships (PPP) - The process of the selection of the private sector party (concessionaire etc.)</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.1.11</td>
                    <td>Public- private partnerships (PPP) - All payment made under the PPP project</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.2</td>
                    <td colSpan={2}>Are the details of Policies / Decisions, which affect the public, informed to them? [Section 4(1) (c)]</td>
                </tr>
                <tr>
                    <td>3.2.1</td>
                    <td>Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive - Policy decisions/ legislations taken in the previous one year</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.2.2</td>
                    <td>Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive - Outline the Public consultation process</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.2.3</td>
                    <td>Publish all relevant facts while formulating important policies or announcing decisions which affect public to make the process more interactive-Outline the arrangement for consultation before formulation of policy</td>
                    <td>Not Applicable</td>
                </tr>
                <tr>
                    <td>3.3</td>
                    <td colSpan={2}>Dissemination of Information widely and in such form and manner which is easily accessible to the public [Section 4(3)]</td>
                </tr>
                <tr>
                    <td>3.3.1</td>
                    <td>Use of the most effective means of communication - Internet (website)</td>
                    <td>
                        The information dissemination primarily happens through the Council’s Website. Please click <Link href="/">here</Link> to visit the Council’s Website.
                    </td>
                </tr>
                <tr>
                    <td>3.4</td>
                    <td colSpan={2}>Form of accessibility of Information Manual/ Handbook [Section 4(1)(b)]</td>
                </tr>
                <tr>
                    <td>3.4.1</td>
                    <td>Information manual / handbook available in electronic format</td>
                    <td>
                        Annual Report: <a href="/public/Public_Affairs/Annual_Report_19_20.pdf">2019-20</a>, <a href="/public/Public_Affairs/Annual_Report_20_21.pdf">2020-21</a>, <a href="/public/Public_Affairs/Annual_Report_21_22.pdf">2021-22</a>, <a href="/public/Public_Affairs/Annual_Report_22_23.pdf">2022-23</a>, <a href="/public/Public_Affairs/Annual_Report_23_24.pdf">2023-24</a>
                    </td>
                </tr>
                <tr>
                    <td>3.4.1</td>
                    <td>Information manual / handbook available in printed format</td>
                    <td>
                        Annual Report: <a href="/public/Public_Affairs/Annual_Report_19_20.pdf">2019-20</a>, <a href="/public/Public_Affairs/Annual_Report_20_21.pdf">2020-21</a>, <a href="/public/Public_Affairs/Annual_Report_21_22.pdf">2021-22</a>, <a href="/public/Public_Affairs/Annual_Report_22_23.pdf">2022-23</a>, <a href="/public/Public_Affairs/Annual_Report_23_24.pdf">2023-24</a>
                    </td>
                </tr>
                <tr>
                    <td>3.5</td>
                    <td colSpan={2}>Whether information manual/ handbook available free of cost or not [Section 4(1)(b)]</td>
                </tr>
                <tr>
                    <td>3.5.1</td>
                    <td>List of materials available Free of cost</td>
                    <td rowSpan={2}><a href="/public/Public_Affairs/Documents_Manuals.xlsx">Documents Manual</a></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Public_Affair