import assets from '@/app/json/assets'
import Image from 'next/image'
import React from 'react'

export default function BannerSec() {
  return (
    <div className='bannerSec'>
        <Image src={assets.bannerBg} width={1900} height={500} alt='img'/>
    </div>
  )
}
