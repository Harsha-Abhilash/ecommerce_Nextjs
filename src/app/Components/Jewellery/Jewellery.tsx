"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Jewellery() {
  const router = useRouter();
  const [checkstate, setcheckstate] = useState(false);
  function Onhandlechange() {
    const newCheckstate = !checkstate;
    setcheckstate(newCheckstate);
    if (newCheckstate) {
      router.push("/Products?category=jewelery");
    } else {
      router.push("/Products");
    }
  }
  return (
    <div>
      <input
        className="form-check-input "
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={Onhandlechange}
      />
      Jewellery
    </div>
  );
}
