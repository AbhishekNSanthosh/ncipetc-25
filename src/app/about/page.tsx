import About from "@widgets/About";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export default function page() {
  return (
    <main>
      <Header />
      <div className="lg:pt-[100px] pt-[50px]">
        <About />
      </div>
      <Footer />
    </main>
  );
}
