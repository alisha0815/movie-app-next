import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>movie details: {id}</div>;
};

export default Detail;
