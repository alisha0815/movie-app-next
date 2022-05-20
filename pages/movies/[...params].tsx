import { useRouter } from "next/router";
import { monitorEventLoopDelay } from "perf_hooks";
import React from "react";

const Detail = () => {
  const router = useRouter();
  console.log(router.query.params);
  const [title, id] = router.query.params || [];
  console.log({ title, id });
  return (
    <div>
      <h3>movie details: {id}</h3>
      <h5>{title || "Loading...."}</h5>
    </div>
  );
};

export default Detail;
