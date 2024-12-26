
import { constants } from "buffer";
import Electronics_checkbox from "../Components/Electronics_Checkbox/Electronics_checkbox";
import Jewellery from "../Components/Jewellery/Jewellery";
import Mens_clothing from "../Components/Mens_clothing/Mens_clothing";

import Product_card from "../Product_Card/Product_card";
import { Product_services } from "../Services/Product_services";


export default async function Products(props: any) {
  console.log("product type is",props);

  const { category } = await props.searchParams;
  console.log("category",category);
  if(category!==undefined){

  if (category == "electronic") {
    var product = await Product_services.Get_productByCategory("electronic");
  } else if (category == "jewelery") {
     product = await Product_services.Get_productByCategory("jewelery");
  } else if (category == "men") {
   var  product = await Product_services.Get_productByCategory(
      "men's clothing"
    );
  } else if (category == "women") {
   var  product = await Product_services.Get_productByCategory(
      "women's clothing"
    );
  } 
}
  else {
    var product = await Product_services.Get_product();
  }
  console.log("product issssssssss",product);
  return (
    <>
      <div className="row ">
        <div className="col-2">
          <div className="row p-3 fw-bold">Search By Category</div>
          <div className="row m-2">
            <Electronics_checkbox></Electronics_checkbox>
            <Jewellery></Jewellery>
            <Mens_clothing></Mens_clothing>
           
          </div>
        </div>
        <div className="col">
          <div className="row">
            {product.map((p: any) => {
              return <Product_card key={p.id} product={p} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
