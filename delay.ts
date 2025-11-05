function delay(delayTime: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, delayTime);
  });
}

(async () => {
  console.time('delay');
  const res = await delay(1000);
  console.log(res);
  console.timeEnd('delay');
})();
