import React from 'react'
import { Link } from 'react-router-dom'
import './rti.css'

const InformationDis = () => {
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
                <td>6</td>
                <td colSpan={2}>Information Disclosed on own Initiative</td>
            </tr>
            <tr>
                <td>6.1</td>
                <td colSpan={2}>Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information</td>
            </tr>
            <tr>
                <td>6.1.1</td>
                <td>Item / information disclosed so that public have minimum resort to use of RTI Act to obtain information</td>
                <td>
                    <p>Please click on the following link to view the details</p>
                    <p><Link to='/'>Naturopathyday.in/</Link></p>
                </td>
            </tr>
            <tr>
                <td>6.2</td>
                <td colSpan={2}>Guidelines for Indian Government Websites (GIGW) is followed (released in February 2009 and included in the Central Secretariat Manual of Office Procedures (CSMOP) by Department of Administrative Reforms and Public Grievances, Ministry of Personnel, Public Grievances and Pension</td>
            </tr>
            <tr>
                <td>6.2.1</td>
                <td>Whether STQC certification obtained and its validity</td>
                <td>Not Applicable</td>
            </tr>
            <tr>
                <td>6.2.2</td>
                <td>Does the website show the certificate on the Website?</td>
                <td>Not Met</td>
            </tr>
        </tbody>

    </table>
  )
}

export default InformationDis