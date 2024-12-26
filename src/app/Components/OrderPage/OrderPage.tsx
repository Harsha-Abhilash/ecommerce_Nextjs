import { useContext, useMemo } from "react";
import cartContext from "@/app/contexts/Context";
import Link from "next/link";
import Image from "next/image";
function OrderPage() {
  
  const { cartItem } = useContext(cartContext);

  // Memoize subtotal calculation
  const subtotal = useMemo(() => {
    return cartItem.reduce(
      (total:number, item:any) => total + item.price * item.quantity,
      0
    );
  }, [cartItem]);

  const handleBuy = () => {
    const cartdata = cartItem.map((c:any) => ({
      data: {
        title: c.title,

        price: c.price,
        image: c.image,
      },
    }));

    for (const item of cartdata) {
      fetch("https://heroic-beauty-85276b92ee.strapiapp.com/api/carts", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 0d381c9d9bbd59e82dc09acb90ab99ef510614def0893ee0c3924c7ff81c15fdb6308ab1db9bbee988bd2aed5855511f043bee1f40096fc7f7f7fe3db99d9b5c03276844fada96788de1e3b4afdaf6d0f726fd1e03b3cac16c71e621c47ad378a90cf332994ba37926494d45d1b7a70e51e2e4108558c34915fa9967c66ce31a",
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
  console.log("orederpage");
  return (
    <div className="container">
      <h1 className="p-2">Order Details</h1>

      {cartItem.length === 0 ? (
        <span>Your Cart is Empty</span>
      ) : (
        cartItem.map((item:any) => (
          <div className="row" key={item.id}>
            <div className="col">
              <Image src={item.image.url} height={200} alt="no image" width={200} ></Image>
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
        <h3 className="text-danger fw-bold">
          SubTotal: ${subtotal.toFixed(2)}
        </h3>
      </div>

      <div>
        <button onClick={handleBuy} className="btn btn-success m-3">
          Proceed to Buy
        </button>
        <div>
          <Link href="/Home" className="btn btn-warning m-3">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
