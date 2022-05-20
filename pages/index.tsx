import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  console.log("router", router);
  const onClick = (id: number, title: string) => {
    router.push(
      `/movies/${title}/${id}`
      // {
      //   pathname: `/movies/${id}`,
      //   query: {
      //     title,
      //   },
      // },
      // `/movies/${id}`
    );
  };

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(URL)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <h3>Home</h3>
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h5>{movie.original_title}</h5>
          {/* <Link href={`/movies/${movie.id}`}>
            <a> */}
          <div onClick={() => onClick(movie.id, movie.original_title)}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
              width={200}
              height={200}
            />
          </div>
          {/* </a>
          </Link> */}
        </div>
      ))}
      <Seo title="home" />
    </div>
  );
};

export default Home;
