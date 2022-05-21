import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { relative } from "path";
import { ReactElement, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";

const URL = "api/movies";
const imgURL = `https://image.tmdb.org/t/p/w500`;
const API_KEYS = process.env.NEXT_PUBLIC_API_KEY;

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
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
      console.log("results", results);
    })();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 container mx-auto text-center">
        {!movies && <h3>Loading...</h3>}
        {movies?.map((movie) => (
          <div key={movie.id} className="">
            <h5 className="text-lg pb-3 italic text-lime-900 ">
              {movie.original_title}
            </h5>
            {/* <Link href={`/movies/${movie.id}`}>
            <a> */}
            <div
              onClick={() => onClick(movie.id, movie.original_title)}
              className="pb-5 hover:transition-all hover:scale-105 "
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* </a>
          </Link> */}
          </div>
        ))}
        <Seo title="home" />
      </div>
    </div>
  );
};

export default Home;
