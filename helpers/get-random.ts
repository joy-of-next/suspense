export async function getRandom(ms = 2000) {
  if (ms !== 0) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }

  return Math.floor(Math.random() * 100);
}
