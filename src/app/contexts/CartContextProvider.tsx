"use client";
import cartContext from "./Context";
import React from "react";
import { useState, useCallback } from "react";

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    
  }

  // const [cartItem, setcartitems] =useState<CartItem[]>([]);
  const [cartItem, setcartitems] = useState<Cart[]>([]);

  // const[quantity,updateCartItemQuantity]=useState('');

  const addToCart = useCallback((item: Cart) => {
    console.log("adding");
    setcartitems((prevItems: Cart[]) => {
      const existingItem = prevItems.find(
        (cartItem: Cart) => cartItem.id === item.id
      );
      console.log("existing", existingItem);
      if (existingItem) {
        // If the item already exists, increase its quantity
        return prevItems.map((cartItem: Cart) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Otherwise, add the item with a quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = (id: number) => {
    setcartitems((prevItems: Cart[]) => {
      const existingItem = prevItems.find((item: Cart) => item.id === id);
      {
        // If quantity is 1, remove the item from cart
        return prevItems.filter((item: Cart) => item.id !== id);
      }
    });
  };

  const increaseQuantity = (itemId: number) => {
    setcartitems((prevItems: Cart[]) =>
      prevItems.map((item: Cart) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (itemId: number) => {
    setcartitems((prevItems: Cart[]) =>
      prevItems.map((item: Cart) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <cartContext.Provider
        value={{
          cartItem,

          addToCart,
          removeFromCart,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}
