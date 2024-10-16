import React from 'react'
import './Header.css' ;
import { Link } from 'react-router-dom';
import Home from '../../../Home/Home'



export default function Header() {
  return (
    <div>
      <div className="background-container"> 
      <div className='container'>
            <div className='row h-100'>
                <div className='col-12'>
                    <div className="contentt h-100 w-100 d-flex flex-">
                        <h1 className='tittle'>pricing plans</h1>
                        <ul className='d-flex list m-0'>
                            <li className='l-design'>
                            <Link to="/home">Home</Link>
                            </li>
                            <li>
                            <i class="fa-solid fa-arrow-right"></i>
                            </li>
                            <li>pricing plans</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        <div className='line'></div>
    </div>
  )
}
