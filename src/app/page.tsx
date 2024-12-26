
import banner from '../../src/app/images/home_banner.jpg'
import Recomented_products from '../app/Components/Recomented_products/Recomented'

import Image from 'next/image'

export default function Home() {
 
  return (<>
    <div className="row">
      <Image  src={banner.src} alt="no image" height={300} style={{ objectFit: 'cover' }} width={300}></Image>
      </div>
      <div className='p-2'><h3>Recomented Products</h3></div>
      <Recomented_products/>
      







       
    
</>
















    
     );
}
