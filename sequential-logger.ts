function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function logWithDelays(arr: string[]): Promise<void> {
  for (const str of arr) {
    console.log(str);
    await delay(1000);
  }
}

(async () => {
  await logWithDelays(['A', 'B', 'C']);
})();
