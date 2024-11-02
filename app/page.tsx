import { getRandom } from "@/helpers/get-random";

export default function Home() {
  return (
    <main>
      <h1>Server Component Page</h1>
      <RenderRandom />
      <RenderRandom />
    </main>
  );
}

async function RenderRandom() {
  const number = await getRandom();

  return <p>Random: {number}</p>;
}
