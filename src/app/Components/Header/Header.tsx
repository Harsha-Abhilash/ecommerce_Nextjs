"use client";

import logo from "../../images/logo.jpg";
import Link from "next/link";

import Image from "next/image";
import cartContext from "@/app/contexts/Context";
import { useContext } from "react";
export default function Header() {
  const { cartItem } = useContext(cartContext);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src={logo.src} height={100} width={100} alt="no image" style={{objectFit:'contain'}}></Image>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Cart">
                <div className="d-flex">
                  <Image
                    src="/images/cart2.jpg"
                    alt=""
                    width={50}
                    height={50}
                  ></Image>
                  <h6 className="text-danger">{cartItem.length}</h6>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
