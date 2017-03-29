var colorsArray = [
  "#45CCFF",
  "#49E83E",
  "#FFD432",
  "#E84B30",
  "#B243FF"
]

var quoteArray = [
  ["Test Quote 1","Person 1"],
  ["Test Quote 2","Person 2"],
  ["Test Quote 3","Person 3"],
  ["Test Quote 4","Person 4"],
  ["Test Quote 5","Person 5"],
];

function app() {
  var quoteButton = document.querySelector('.get-quote');
  quoteButton.addEventListener('click', nextQuote);

  nextQuote();
}

function nextQuote() {
  var app = document.querySelector('.app');
  var button = document.querySelector('.get-quote');
  var heading = document.querySelector('.app h1');
  var randomColor = Math.floor( Math.random() * colorsArray.length );
  var randomQuote = Math.floor( Math.random() * quoteArray.length );

  document.querySelector('.quote').innerHTML = quoteArray[ randomQuote ][0];
  document.querySelector('.person').innerHTML = quoteArray[ randomQuote ][1];

  // console.log(randomColor);
  app.style.backgroundColor = colorsArray[ randomColor ];
  button.style.backgroundColor = colorsArray[ randomColor ];
  heading.style.color = colorsArray[ randomColor ];
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(app);
