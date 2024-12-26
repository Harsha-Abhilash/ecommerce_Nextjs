import React from 'react'
import Image from 'next/image'
export default function employee() {
  return (
    <div><Image src={'/test.jpg'} alt='sample' width={'200'} height={'100'}/>
    </div>
  )
}
