import React from 'react'
import Navbar from '../Navbar'
import './Registration.css'

export default function Registration() {
  return (
    <div>
         <Navbar/> 
        <div className='header'> 
        
            <h1>Registration</h1>
        </div>

        <div class="buttonContainer ">
            <a href="http://www.qmds.com"  target="_blank" class="button">
            <span >REGISTER NOW</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="arrow"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg></a></div>

<div className='table1'>
    <h1> Registration Rates For Indian Delegate </h1>


    <table>
        <thead>
            <tr>
                <th>Delegate Category</th>
                <th>Through 15th Nov 2024</th>
                <th>After 15th Nov 2024  </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UG/PG Student (Full Time)</td>
                <td>₹3500</td>
                <td>₹4500</td>
            </tr>
            <tr>
                <td>Graduate/Research Student (Full Time)</td>
                <td>₹4500</td>
                <td>₹5500</td>
            </tr>
            <tr>
                <td>Faculty/Post Doc</td>
                <td>₹6000</td>
                <td>₹7000</td>
            </tr>
            <tr>
                <td>Industry/R&D</td>
                <td>₹8000</td>
                <td>₹9000</td>
            </tr>
            <tr>
                <td>Accompany Person</td>
                <td>₹1500</td>
                <td>₹1500</td>
            </tr>
        </tbody>
    </table>
</div>

<div className='table1'>
    <h1> Registration Rates For Foreign Delegate </h1>
    <table>
        <thead>
            <tr>
                <th>Delegate Category</th>
                <th>Through 15th Nov 2024</th>
                <th>After 15th Nov 2024  </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UG/PG Student (Full Time)</td>
                <td>$200</td>
                <td>$250</td>
            </tr>
            <tr>
                <td>Graduate/Research Student (Full Time)</td>
                <td>$200</td>
                <td>$250</td>
            </tr>
            <tr>
                <td>Faculty/Post Doc</td>
                <td>$250</td>
                <td>$300</td>
            </tr>
            <tr>
                <td>Industry/R&D</td>
                <td>$300</td>
                <td>$350</td>
            </tr>
            <tr>
                <td>Accompany Person</td>
                <td>$100</td>
                <td>$100</td>
            </tr>
        </tbody>
    </table>
</div>
      
    </div>
  )
}
