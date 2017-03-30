var quoteMachine = (function quoteModule() {
  var quotes = [
    {
      quote: "I love deadlines. I like the whoosing sound they make as they fly by.",
      citation: "Douglas Adams"
    },{
      quote: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
      citation: "Zig Ziglar"
    },{
      quote: "Life appears to me too short to be spent in nursing animosity or registering wrongs",
      citation: "Charlotte Brontë"
    },{
      quote: "Nothing is so painful to the human mind as a great and sudden change.",
      citation: "Mary Shelley"
    },{
      quote: "Anyone who ever gave you confidence, you owe them a lot.",
      citation: "Truman Capote"
    },{
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      citation: "J.K. Rowling, Harry Potter and the Goblet of Fire"
    },{
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      citation: "Robert Frost"
    },{
      quote: "We accept the love we think we deserve.",
      citation: "Stephen Chbosky, The Perks of Being A Wallflower"
    },{
      quote: "If we do something over and over, it becomes normal. If we see the same thing over and over, it becomes normal.",
      citation: "Chimamanda Ngozi Adichie, We Should All Be Feminists"
    },{
      quote: "A day without sunshine is like, you know, night.",
      citation: "Steve Martin"
    },{
      quote: "Reality continues to ruin my life.",
      citation: "Bill Watterson, The Complete Calvin and Hobbes"
    }
  ];

  var currentQuote = {
    quote: "",
    citation: ""
  };

  function getRandomNumber(max, min) {
    if (typeof min !== "number") {
      min = 0;
    }
    return Math.floor( Math.random() * (max - min) + min );
  }

  function getCurrentQuote() {
    return currentQuote;
  }

  function getNewQuote() {
    var newQuote = quotes[ getRandomNumber(quotes.length) ];
    if (newQuote.quote !== currentQuote.quote) {
      currentQuote = newQuote
      return newQuote;
    } else {
      return getNewQuote();
    }
  }

  return {
    getCurrentQuote: getCurrentQuote,
    getNewQuote: getNewQuote
  };
})();

var colorMachine = (function colorModule() {
  var colorOptions = [
    "#45CCFF",
    "#49E83E",
    "#FFD432",
    "#E84B30",
    "#B243FF"
  ];

  var newColor = "";
  var currentColor = "";

  function getRandomNumber(max, min) {
    if (typeof min !== "number") {
      min = 0;
    }
    return Math.floor( Math.random() * (max - min) + min );
  }

  function getCurrentColor() {
    return currentColor;
  }

  function getNewColor() {
    var newColor = colorOptions[ getRandomNumber(colorOptions.length) ];
    if (newColor !== currentColor) {
      currentColor = newColor;
      return currentColor;
    } else {
      return getNewColor();
    }
  }

  return {
    getCurrentColor: getCurrentColor,
    getNewColor: getNewColor
  }

})();

function app() {
  var quoteButton = document.querySelector('.get-quote');
  quoteButton.addEventListener('click', nextQuote );

  nextQuote();
}

function nextQuote() {
  var app = document.querySelector('.app');
  var button = document.querySelector('.get-quote');
  var heading = document.querySelector('.app h1');
  var color = colorMachine.getNewColor();
  var quote = quoteMachine.getNewQuote();

  document.querySelector('.quote').innerHTML = quote.quote;
  document.querySelector('.person').innerHTML = quote.citation;

  // console.log(randomColor);
  app.style.backgroundColor = color;
  button.style.backgroundColor = color;
  heading.style.color = color;
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(app);
