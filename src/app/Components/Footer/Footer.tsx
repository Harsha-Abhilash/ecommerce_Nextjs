import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid bg-info ">
      <div className="row">
        <div className="col">
          <ul className="p-5">
            <ol className="fw-bold">
              <Link href="/FooterLink" className="nav-link active">
                Get Us to know
              </Link>
            </ol>
            <ol>About</ol>
            <ol>Carriers</ol>
            <ol>Shop cart Science</ol>
          </ul>
        </div>
        <div className="col">
          <ul className="p-5">
            <ol className="fw-bold">
              <Link href="/FooterLink" className="nav-link active">
                Shop with Us
              </Link>
            </ol>
            <ol>Your Orders</ol>
            <ol>Your Addresses</ol>
            <ol>Your Lists</ol>
          </ul>
        </div>
        <div className="col">
          <ul className="p-5">
            <ol className="fw-bold">
              {" "}
              <Link href="/FooterLink" className="nav-link active">
                Make money with Us
              </Link>
            </ol>
            <ol>Protect and build your brand</ol>
            <ol>Sell on ShopCart</ol>
            <ol>Fulfillment by Amazon</ol>
          </ul>
        </div>
        <div className="col">
          <ul className="p-5">
            <ol className="fw-bold">
              {" "}
              <Link href="/FooterLink" className="nav-link active">
                Let Us Help You
              </Link>
            </ol>
            <ol>Shipping & Delivery</ol>
            <ol>Returns & Replacements</ol>
            <ol>ShopCart App Download</ol>
          </ul>
        </div>
      </div>
    </div>
  );
}
