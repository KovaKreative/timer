const args = process.argv.slice(2);

for (const time of args) {
  if (time < 0 || isNaN(Number(time))) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}
