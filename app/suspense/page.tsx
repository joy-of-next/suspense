import { Suspense } from "react";
import { getRandom } from "@/helpers/get-random";

export default function Page() {
  return (
    <main>
      <h1>Suspense</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <RenderRandom />
        <RenderRandom />
      </Suspense>
    </main>
  );
}

async function RenderRandom() {
  const number = await getRandom();

  return <p>Random: {number}</p>;
}
