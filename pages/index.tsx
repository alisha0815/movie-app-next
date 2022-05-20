import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { relative } from "path";
import { ReactElement, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

const URL = `/api/movies`;
const imgURL = `https://image.tmdb.org/t/p/w500`;

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home: NextPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(URL)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <h3>Home</h3>
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h5>{movie.original_title}</h5>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
            width={200}
            height={200}
          />
        </div>
      ))}
      <Seo title="home" />
    </>
  );
};

export default Home;
