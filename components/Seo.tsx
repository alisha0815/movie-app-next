import Head from "next/head";
import React from "react";

const Seo = ({ title }: any) => {
  return (
    <Head>
      <title>{title} | Movie App</title>
    </Head>
  );
};

export default Seo;
