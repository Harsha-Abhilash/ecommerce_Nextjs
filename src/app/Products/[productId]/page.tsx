// import Link from "next/link";
// import React from "react";
// import { Product_services } from "@/app/Services/Product_services";
// import exp from "constants";
// import { cookies } from 'next/headers'
// import { headers } from 'next/headers'

// export async function generateMetadata(params:any) {
//   console.log("metadat",params);
//   const id=params.params.productId;
//   if(id)
//  {
//   var response=await Product_services.Get_productbyId(id);
//   return{
//     title:response.title
//   }
  
  
//     return{
//       title:"something"
//     }
  
//  }
// }

// async function Product_Detail({params}:{params:{productId:any};}) {
//   // const cookielist=await cookies();
//   // const cook=cookielist.get('authtoken');
//   // console.log("cookies",cook,cook?.value);
//   // const head=await headers();
//   // const useragent=head.get('user-agent');
//   // const hostis=head.get('Host');
//   // console.log("hostis",hostis);
//   const {productId }= await params;

//   var product = await Product_services.Get_productbyId(productId);
  

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <img src={product.image.url} style={{height: '300px'}}></img>
//           </div>
//           <div className="col">
//             <div className="row">
//               <h4>{product.title}</h4>
//             </div>

//             <div className="row text-center">
//               <h4 className="text-center">${product.price}</h4>
//             </div>
//             <div className="row text-center p-3">
//               <Link href="/Products">
//                 <button className=" btn btn-warning text-center">
//                   Back to Products
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product_Detail;
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product_services } from "@/app/Services/Product_services";
import { promises } from "dns";

// Fixing the generateMetadata function
// export async function generateMetadata({params}: {params: {productId: any}}) {
//   console.log("metadata", params);
//   const id = params.productId;
//   if (id) {
//     const response = await Product_services.Get_productbyId(id);
//     return {
//       title: response.title,
//     };
//   }
  
//   return {
//     title: "Product Not Found", // Default title when no productId is found
//   };
// }

// Correcting the Product_Detail component
// interface ProductDetailProps {
//   params: {
//     productId: any; // Define productId type more specifically
//   };
// }

async function Product_Detail({params}: any) {
  const { productId } = params; // No need to use await here, params is already an object
  console.log("detail",params);

  // Fetch product details based on productId
  const product = await Product_services.Get_productbyId(productId);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Image src={product.image.url} alt={product.title}  width={500}   // Provide width and height for optimization
            height={300}  style={{ objectFit: 'contain' }} />
          </div>
          <div className="col">
            <div className="row">
              <h4>{product.title}</h4>
            </div>
            <div className="row text-center">
              <h4 className="text-center">${product.price}</h4>
            </div>
            <div className="row text-center p-3">
              <Link href="/Products">
                <button className="btn btn-warning text-center">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_Detail;
