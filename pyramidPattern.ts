function pyramidPattern(num: number): void {
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < num - i - 1; j++) {
      str += ' ';
    }

    for (let j = 0; j < i + 1; j++) {
      str += '*';
    }

    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

pyramidPattern(4);
