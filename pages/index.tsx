import React from "react";
import { Counter } from "../components/Counter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <p>hello</p>
      <Counter />
    </div>
  );
}

export default MyApp;
