const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const welcomeMessage = "Press B to hear the beep.\n" +
  "Enter a digit from 1 to 9 to set the timer for that many seconds.\n" +
  "Press Ctrl+C to exit.";
const timerMessage = function(seconds) {
  return `Setting timer for ${seconds} seconds...`;
};
const quitMessage = "Thanks for using me! Ciao!";

console.log(welcomeMessage);

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log(quitMessage);
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (!isNaN(Number(key))) {
    console.log(timerMessage(key));
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});