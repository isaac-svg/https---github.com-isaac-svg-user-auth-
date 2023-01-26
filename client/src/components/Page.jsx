import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../Context/UserContext";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const Page = () => {
  const [mobile, setMobile] = useState(0);

  useEffect(() => {
    setMobile(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setMobile(window.innerWidth);
    });
    return window.removeEventListener("resize", (e) => {
      setMobile(window.innerWidth);
    });
    //
  }, []);
  console.log(mobile);
  const smallScreen = mobile <= 620;
  return (
    <main>
      {/* */}
      {mobile <= 620 ? <Sidebar /> : <Header />}

      <Content smallScreen={smallScreen} />
    </main>
  );
};

// export  Page;
