#!/usr/bin/env node

const [,,hh,mm] = process.argv;

const h = parseInt(hh);
const m = parseInt(mm) / 60;
const result = Math.round((h+m) * 100) / 100;

console.log(`${result} h`);
