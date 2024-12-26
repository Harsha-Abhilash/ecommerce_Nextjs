"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Mens_clothing() {
  const router = useRouter();
  const [checkstate, setcheckstate] = useState(false);
  function Onhandlechange() {
    const newCheckstate = !checkstate;
    setcheckstate(newCheckstate);
    if (newCheckstate) {
      router.push("/Products?category=men");
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
      Mens'Clothing
    </div>
  );
}
