var colorsArray = [
  "#45CCFF",
  "#49E83E",
  "#FFD432",
  "#E84B30",
  "#B243FF"
]

function app() {
  var quoteButton = document.querySelector('.get-quote');
  quoteButton.addEventListener('click', changeBackground);

  changeBackground();
}

function changeBackground() {
  var app = document.querySelector('.app');
  var button = document.querySelector('.get-quote');
  var heading = document.querySelector('.app h1');
  var randomColor = Math.floor( Math.random() * colorsArray.length );
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
