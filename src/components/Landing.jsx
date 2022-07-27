import React,{useEffect} from 'react'
import gsap from 'gsap'
import RequestInvite from './RequestInvite'
import mockup from '../images/image-mockups.png'

const landAnimation=()=>{
    gsap.fromTo('.landtext',{
        y:200,
        opacity:0,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        ease:'Power4.in',
        stagger:0.2,
    })

    gsap.fromTo('.landimg',{
        yPercent:100,
        opacity:0
        // height:0
    },{
        opacity:1,
        yPercent:0,
        // height:"100%",
        delay:0.5,
        duration:0.5,
        ease:'Power4.in',
    })
}

const Landing = () => {

    useEffect(()=>landAnimation(),[])

  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row justify-between   z-1000'>
        <div className='w-full  lg:order-1 order-2 lg:w-1/2 xl:w-[45%] h-1/2 lg:h-full flex justify-center lg:justify-end  items-center '>
            <div className='flex flex-wrap gap-8  flex-col  w-4/5 mx-auto lg:mx-0 text-center    lg:w-[440px] xl:w-[600px] lg:text-left'>
            <h1 className='text-db landtext text-2xl md:text-5xl xl:text-6xl font-normal'>Next generation <br/>
        digital banking
        </h1>
        <p className='landtext text-gb mx-auto lg:mx-0 w-full  lg:w-[440px]'>Take your financial life online.Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
        <div className='mx-auto lg:mx-0 landtext'>
        <RequestInvite />
        </div>
        </div>  
        </div>     
        <div className='w-full order-1 lg:order-2  lg:w-1/2 xl:w-[55%] h-1/2 lg:h-full relative'>
            <div className="intro-img absolute  -top-10 right-0 h-full"> </div>
            <img src={mockup} alt="" className='landimg  absolute bottom-0 md:-bottom-10 right-0 lg:bottom-10 lg:-right-[100px] z-10'/>
        </div>
    </div>
  )
}

export default Landing