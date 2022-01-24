import React from "react";

import { Header } from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

import bg from "../public/assets/web-bg.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethan Moffat | Software Developer</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          justifyContent: "space-between",
        }}
        className="transition flex flex-col justify-between"
      >
        <Header />
        <Footer />
      </div>
    </>
  );
}
