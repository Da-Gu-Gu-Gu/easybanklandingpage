import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from './Card'

gsap.registerPlugin(ScrollTrigger);

const data=[
    {
        img:require('../images/icon-online.svg'),
        title:"Online Banking",
        desc:"Our modern web and mobile applications allow you to keep track of your finances wherver you are in the world."
    },
    {
        img:require('../images/icon-budgeting.svg'),
        title:"Simple Budgeting",
        desc:"See exactly where your money goes each month.Receive notifications when you're done to hitting your limits."
    },
    {
        img:require("../images/icon-onboarding.svg"),
        title:"Fast Onboarding",
        desc:"We don't do branches.Open your account in minutes online and start taking control of your finances right away."
    },
    {
        img:require("../images/icon-api.svg"),
        title:"Open API",
        desc:"Manage your savings,investments,pension and much mour from one account.Tracking your money has never been easier."
    }

]

const aboutanimation=()=>{
    gsap.fromTo(".abouttext",{
        y:200,
        opacity:0.5,
    },{
        y:0,
        opacity:1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".about",
          start: "start bottom-=300",
          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
    })
}

const About = () => {

useEffect(()=>{
    aboutanimation()
},[])

  return (
    <div id="about" className='about bg-lgb lg:text-left text-center lg:-mt-[150px] pb-[100px] h-max'>
        <div className='w-screen  lg:w-4/5 mx-auto '>
            <div className='p-5'>
        <h2 className='mt-[100px] text-3xl abouttext'>Why choose Easybank?</h2>
        <p className='text-gb my-5 w-full  abouttext lg:w-[550px]'>We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before.
        </p>
        </div>
        <div className="w-screen flex flex-wrap abouttext">
        <Card title={data[0].title} desc={data[0].desc} img={data[0].img} />
        <Card title={data[1].title} desc={data[1].desc} img={data[1].img} />
        <Card title={data[2].title} desc={data[2].desc} img={data[2].img} />
        <Card title={data[3].title} desc={data[3].desc} img={data[3].img} />
        </div>
        </div>
    </div>
  )
}

export default About