import React from 'react'

const BlogCard = ({img,author,content,title}) => {
  return (
    <div className='md:w-[40%] cursor-pointer lg:w-[47%] 2xl:w-[22%] bg-white overflow-hidden rounded'>
        <img src={img} alt="" className='h-[200px] w-full'/>
        <div className="content p-5 py-8">
            <span className='my-3 text-gb'>{author}</span>
            <h2 className='my-3 hover:text-lgr'>{title}</h2>
            <p className='text-gb'>{content}</p>
        </div>
    </div>
  )
}

export default BlogCard