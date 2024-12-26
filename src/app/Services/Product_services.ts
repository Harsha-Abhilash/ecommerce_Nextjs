import { Service_base } from "./base_service";

export class Product_services extends Service_base {
  static async Get_product() {
    const Product_response = await fetch(
      Service_base.get_url("products?populate=image")
    );

    const prod_data = await Product_response.json();
    

    return prod_data.data;
  }
  static async Get_productByCategory(category: string) {
    const Product_response = await fetch(
      Service_base.get_url(
        `products?populate=*&filters[category][$eq]=${category}`
      )
    );
    const prod_data = await Product_response.json();
    
    return prod_data.data;
  }

  static async Get_productbyId(id: string) {
    const Product_response = await fetch(
      Service_base.get_url(`products/${id}?populate=*`)
    );
    const prod_data = await Product_response.json();

    return prod_data.data;
  }
}
