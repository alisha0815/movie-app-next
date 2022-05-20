import { useRouter } from "next/router";
import { monitorEventLoopDelay } from "perf_hooks";
import React from "react";

const Detail = () => {
  const router = useRouter();
  const { id, title } = router.query;
  return (
    <div>
      <h3>movie details: {id}</h3>
      <h5>{title || "Loading...."}</h5>
    </div>
  );
};

export default Detail;
