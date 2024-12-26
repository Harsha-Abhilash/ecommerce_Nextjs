import Image from 'next/image'
import React from 'react'


export default function employee() {
  return (
    <div> employee image
       <Image src={'/test.jpg'} alt='sample'/>
    </div>
  )
}
