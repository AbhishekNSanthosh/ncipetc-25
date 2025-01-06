import About from "@widgets/About";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export default function page() {
  return (
    <main>
      <Header />
      <div className="pt-[100px]">
        <About />
      </div>
      <Footer />
    </main>
  );
}
