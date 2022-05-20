import Head from "next/head";
import React from "react";

interface ITitle {
  title: string;
}

const Seo = ({ title }: ITitle) => {
  return (
    <Head>
      <title>{title} | Movie App</title>
    </Head>
  );
};

export default Seo;
