import Head from "next/head";
import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props: any, text: string) => {
  return (
    <>
      <Head>
        <title>NextJs Dashboard App</title>
        <meta name="description" content="whitelabel dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dashApp__UI__container">
        <Header />
        <SideMenu text={text} />
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
