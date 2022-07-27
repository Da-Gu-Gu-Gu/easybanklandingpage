import React from 'react'


const Card = ({title,desc,img}) => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/4  py-5 px-2 '>
        <img src={img.default} alt=""  className='w-[50px] mb-5 mx-auto lg:mx-0 h-[50px]' />
        <h2 className='my-5 text-xl'>{title}</h2>
        <p className='text-gb'>{desc}</p>
    </div>
  )
}

export default Card