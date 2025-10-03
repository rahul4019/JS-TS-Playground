const now = new Date();
console.log(`date: ${now}`);
console.log(`typeof date: ${typeof now}`);

console.log(`year: ${now.getFullYear()}`);
console.log(`month: ${now.getMonth()}`);
console.log(`date: ${now.getDate()}`);
console.log(`day: ${now.getDay()}`);

const isoString = now.toISOString();
console.log(`ISO string: ${isoString}`);

const dateString = now.toDateString()
console.log(`Date string: ${dateString}`);

const date1 = new Date("2021-06-15").getTime()
console.log(`converted: ${date1}`)
