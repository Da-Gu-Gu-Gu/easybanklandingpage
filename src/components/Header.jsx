import React,{useState} from 'react'
import logo from '../images/logo.svg'
import RequestInvite from './RequestInvite'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'


const Header = () => {

    const [open,setOpen]=useState(false)

  return (
    <div className='w-screen h-[80px] header  bg-white py-5 items-center flex'>
        <div className='w-4/5 flex mx-auto items-center  justify-between'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        

        <div className={`${open?"open":"close"} flex lg:h-[80px] menu-link lg:flex-row flex-col items-center justify-between w-full bg-white`}>
        <ul className='links flex flex-wrap text-gb gap-7 lg:h-full lg:leading-[80px] lg:flex-row flex-col grow  justify-center '>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="/">Home</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#about ">About</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#contact">Contact</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#blog">Blog</a></li>
            <li className='cursor-pointer hover:text-black hover:border-b-4 border-lgr'><a href="#careers">Careers</a></li>
        </ul>
        <div className='lg:block hidden'>   
       <RequestInvite/>
       </div>
       </div>

       {/* hamburger */}
       <div className='hamburger cursor-pointer  lg:hidden' >
          {!open && <img src={hamburger} alt="" className='cursor-pointer' onClick={()=>setOpen(true)}/> }
          {open &&  <img src={close} alt="" className='cursor-pointer' onClick={()=>setOpen(false)}/> }
       </div>
        </div>
    </div>
  )
}

export default Header