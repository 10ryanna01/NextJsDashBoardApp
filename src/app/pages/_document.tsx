import { Html, Main, NextScript } from "next/document";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Document() {
  return (
    <Html>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
