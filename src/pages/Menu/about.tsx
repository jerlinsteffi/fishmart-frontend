import React from "react";
import Header from "@/libs/ui/header/Header"; // adjust path if your Header is in a different place

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>About Us</h1>
        <p>
          Welcome to our about page! Here we share details about our
          application and team.
        </p>
      </main>
    </>
  );
}

