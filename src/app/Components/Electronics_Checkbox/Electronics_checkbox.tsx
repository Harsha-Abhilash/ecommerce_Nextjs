"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Electronics_checkbox() {
  const router = useRouter();
  const [checkstate, setcheckstate] = useState(false);
  function Onhandlechange() {
    const newCheckstate = !checkstate;
    setcheckstate(newCheckstate);
    if (newCheckstate) {
      router.push("/Products?category=electronic");
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
      Electronics
    </div>
  );
}
