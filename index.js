
const [,,hh,mm] = process.argv;

const h = parseInt(hh);
const m = Math.floor(parseInt(mm) * 10 / 6);

console.log(`${h}.${m} h`);
