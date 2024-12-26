import { createContext } from "react";
interface CartItem {
   [x:string]:any
  }

const cartContext=createContext({} as CartItem);
  
    

;
export default cartContext;