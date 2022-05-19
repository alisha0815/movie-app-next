import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h3>Home</h3>
      <Seo title="home" />
    </>
  );
};

export default Home;
