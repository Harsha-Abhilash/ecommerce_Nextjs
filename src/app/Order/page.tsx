"use client";
import { useContext, useMemo } from "react";
import cartContext from "@/app/contexts/Context";
import Link from "next/link";
import Image from "next/image";
function Order() {
  const { cartItem } = useContext(cartContext);

  // Memoize subtotal calculation
  const subtotal = useMemo(() => {
    return cartItem.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  }, [cartItem]);

  const handleBuy = () => {
    const cartdata = cartItem.map((c:any) => ({
      data: {
        title: c.title,

        price: c.price,
        category: c.category,
      },
    }));

    console.log("orederpage", cartdata);
    for (const item of cartdata) {
      fetch("https://heroic-beauty-85276b92ee.strapiapp.com/api/Carts", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 86c9486ac79deb54bd3a92e218730fac8db1566d48dc08cac566ba8e1879820f7843ec262cd1c41fc73e9c6db3d79cdfc03c4688163359d23eb2cbadcdec13dd240aae9b61e75c609c4830494d12fd4b316ebd83e669d0336210c666d5e38162dfb5c070f056955d75659f8cc4e09de56e6188bcb32ffd3c296811003c86049b",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("this is data", data);
          console.log("Cart items added successfully:", data);
        })
        .catch((error) => {
          console.error("Error adding cart item:", error);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="p-2 text-danger text-center m-4">Order Details</h1>

      {cartItem.length === 0 ? (
        <span>Your Cart is Empty</span>
      ) : (
        cartItem.map((item: any) => (
          <div className="row" key={item.id}>
            <div className="col">
              <Image src={item.image.url} height={200} width={200} alt="no image"></Image>
            </div>
            <div className="col">
              <div className="row">
                <h3>{item.title}</h3>
              </div>
            </div>
            <div className="col">
              Quantity<h3>{item.quantity}</h3>
            </div>
            <div className="col fw-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <hr />
          </div>
        ))
      )}

      <div className="subtotal">
        <h3 className="text-danger fw-bold text-center">
          SubTotal: ${subtotal.toFixed(2)}
        </h3>
      </div>

      <div>
        <button onClick={handleBuy} className="btn btn-success m-3">
          Proceed to Buy
        </button>
        <div>
          <Link href="/" className="btn btn-warning m-3">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
