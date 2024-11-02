"use client";

import { getRandom } from "@/helpers/get-random";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <main>
      <h1>Client Component Page</h1>
      <RenderRandom />
      <RenderRandom />
    </main>
  );
}

function RenderRandom() {
  const [random, setRandom] = useState<number>();

  useEffect(() => {
    getRandom().then(setRandom);
  }, []);

  if (random === undefined) {
    return <p>Loading...</p>;
  }

  return <p>Random: {random}</p>;
}
