const userName = "";

if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello!");
}

let userQuestion = ``;
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";


if (randomNumber === 1) {
  eightBall = "It is Certain";
} else if (randomNumber === 2) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 3) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 4) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 5) {
  eightBall = "Do not count on it";
} else if (randomNumber === 6) {
  eightBall = "My sources say no";
} else if (randomNumber === 7) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 8) {
  eightBall = "Signs Point to yes";
}

console.log(`Your answer is "${eightBall}"`);
