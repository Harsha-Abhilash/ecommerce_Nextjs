import Product_card from '../../Product_Card/Product_card'
import { Product_services } from "../../Services/Product_services";
// import Product_Card from '../../Product_Card/Product_card.tsx'
export default async function Products() {

  interface prod{
    id: number;
   
    title:string;
    price: number;
    quantity: number;
    image: string;
    
  }
  
  const product = await Product_services.Get_product();
const sliced=product.slice(2,7);
  return (
    <div className="row">
      {sliced.map((p: prod) => {
        return <Product_card key={p.id} product={p} />;
      })}
    
    </div>
  );
}