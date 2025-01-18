
import assets from '@/lib/json/assets'
import React from 'react'
import BlogCard from './BlogCard'


const blogList=[
  {
    img:assets.founderPack,
    title:"Founder pack sale is live now !!",
    desc:"Grab the opportunity and get special clothing,weapons,jutsu and other exciting featues."
  }
]

export default function BlogUpdatesSec() {
  return (
   <div className="cmn_gap ">
      <div className="container">
        <div className="text-center mb-8">
          <h2>New Features Every Patch</h2>
          <p>
          Stay Ahead with the Latest Updates and Enhancements
          </p>
        </div>
        <div className="flex  flex-wrap -mx-[10px]">
          {blogList.map((item, index) => (
            <div key={index} className="w-1/2 px-[10px]">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
