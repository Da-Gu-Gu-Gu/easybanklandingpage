import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlogCard from './BlogCard'


gsap.registerPlugin(ScrollTrigger);

const data=[
    {
        img:require('../images/image-currency.jpg'),
        author:"By Clarie Robinson",
        title:"Receive money in any crrency with no fees",
        content:"The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in a single ..."
    },
    {
        img:require('../images/image-restaurant.jpg'),
        author:"By Wilson Hutton",
        title:"Treat yourself without worrying about money",
        content:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you ..."
    },
    {
        img:require('../images/image-plane.jpg'),
        author:"By Wilson Hutton",
        title:"Take your Easybank card wherever you go",
        content:"We want you to enjoy travels.This is how we don't charge any fees on purchases while you're abroad.We'll even show you ... ",
    },
    {
        img:require('../images/image-confetti.jpg'),
        author:"By Clarie Robinson",
        title:"Our invite-only Beta accounts are now live!",
        content:"After a lot of hard work by the whole team,we're excited to launch our closed beta.It's easy to request an invite through the site ...",
    },
]

const bloganimation=()=>{
    gsap.fromTo(".blogtext",{
        y:200,
        opacity:0.5,
    },{
        y:0,
        opacity:1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".blog",
          start: "start bottom-=300",
          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
    })
}

const Blog = () => {

    useEffect(()=>bloganimation(),[])

  return (
    <div id='blog' className='blog w-screen bg-vlg rounded'>
    <div className='w-4/5 mx-auto p-5 pb-20'>
        <h2 className='my-10 text-4xl blogtext'>Latest Articles</h2>
        <div className='w-full blogtext flex flex-wrap gap-10 justify-center'>
        <BlogCard title={data[0].title} img={data[0].img} author={data[0].author} content={data[0].content}/>
        <BlogCard title={data[1].title} img={data[1].img} author={data[1].author} content={data[1].content}/>
        <BlogCard title={data[2].title} img={data[2].img} author={data[2].author} content={data[0].content}/>
        <BlogCard title={data[3].title} img={data[3].img} author={data[3].author} content={data[0].content}/>
        </div>
        </div>
    </div>
  )
}

export default Blog