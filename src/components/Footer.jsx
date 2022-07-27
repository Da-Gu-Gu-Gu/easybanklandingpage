import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import RequestInvite from './RequestInvite'

const Footer = () => {
  return (
    <div id='footer' className='bg-db py-10 bg-blend-light'>
        <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between  text-white" >
            
            <div className='flex w-full mx-auto lg:mx-0 h-20 lg:h-auto  lg:w-max flex-col justify-between  text-white'>
                <img src={logo} alt="" className='mx-auto lg:mx-0 bg-blend-light text-white'/>
                <div className="flex flex-wrap gap-2 mx-auto lg:mx-0">
                    <img src={facebook} alt="" className='hover:text-lgr'/>
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
       
            <div className='flex flex-col lg:flex-row text-center lg:text-left my-5 lg:my-0 w-full lg:w-[350px] justify-around text-lgb'>
                <div className='flex flex-wrap gap-5 flex-col'>
                    <a className='hover:text-lgr' href="#about">About Us</a>
                    <a className='hover:text-lgr' href="/">Contact</a>
                    <a className='hover:text-lgr' href="#blog">Blog</a>
                </div>    
                <div className='flex flex-wrap gap-5 flex-col lg:py-0 py-5'>
                    <a className='hover:text-lgr' href="/">Careers</a>
                    <a className='hover:text-lgr' href="/">Support</a>
                    <a className='hover:text-lgr' href="/">Privacy Policy</a>
                </div>  
            </div>   

            <div className='flex flex-col  w-full lg:w-max   justify-between h-[100px] lg:h-auto'>
                <div className='mx-auto lg:mx-0'>
            <RequestInvite />
            </div>
          <p className='text-gb text-center lg:text-left'>  &copy; Easybank.All Rights Reserved </p>
            </div>
        </div>
    </div>
  )
}

export default Footer