import React from "react";
import "../tailwind.css";
import FontStyles from "../src/styles/FontStyles";
import BaseStyles from "../src/styles/BaseStyles";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <FontStyles />
      <BaseStyles />
      <Component {...pageProps} />
    </>
  );
}
