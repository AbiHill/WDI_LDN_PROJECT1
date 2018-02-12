$(() => {
  console.log('JS Working');

  //get DOM elements
  const $currentToy = $('#currentToy');
  const $timer = $('#timer');
  const $go = $('#go');
  const $items = $('.items');
  const $score = $('#score');
  const $threeTwoOne = $('#three-two-one');
  const $modal = $('#modal');
  const $game = $('#game');

  let playersAnswer = '';
  let currentAnswer = '';
  let score = 0;

  //Toys Object Array
  const toys = [{
    name: 'ball',
    image: '/images/ball.png',
    answer: 'ball'
  }, {
    name: 'acid',
    image: '/images/acid.png',
    answer: 'acid'
  }, {
    name: 'fish',
    image: '/images/fish.png',
    answer: 'fish'
  }, {
    name: 'spock',
    image: '/images/spock.png',
    answer: 'spock'
  }, {
    name: 'apple',
    image: '/images/apple.png',
    answer: 'apple'
  }, {
    name: 'clock',
    image: '/images/clock.png',
    answer: 'clock'
  }, {
    name: 'controller',
    image: '/images/controller.png',
    answer: 'controller'
  }, {
    name: 'dinner',
    image: '/images/dinner.png',
    answer: 'dinner'
  }, {
    name: 'lavalamp',
    image: '/images/lavalamp.png',
    answer: 'lavalamp'
  }, {
    name: 'penguin',
    image: '/images/penguin.png',
    answer: 'penguin'
  }, {
    name: 'pokemon',
    image: '/images/pokemon.png',
    answer: 'pokemon'
  }, {
    name: 'science',
    image: '/images/science.png',
    answer: 'science'
  }, {
    name: 'slipper',
    image: '/images/slipper.png',
    answer: 'slipper'
  }, {
    name: 'teddy',
    image: '/images/teddy.png',
    answer: 'teddy'
  }, {
    name: 'vader',
    image: '/images/vader.png',
    answer: 'vader'
  }
  ];

  function threeTwoOne(){
    let start = 3;
    // change this to the 3 second countdown
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        start = 'GO!';
        clearInterval(startRunning);
        startTimer();
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $threeTwoOne.text(start);
    }, 800);
  }

  function startTimer(){
    let time = 60;
    // change this to the 3 second countdown
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Skip button
  $currentToy.on('click', function() {
    randomToyGenerator();
  });

  //Random Toy Generator Function
  function randomToyGenerator(){
    const randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToyImage);
    currentAnswer = toys[randomIndexNumber].answer;

  }


  //Play Game Function
  $go.on('click', function() {
    randomToyGenerator();
    threeTwoOne();
    $game.css('display', 'block');
    $modal.css('display','none');
  });

  //Click check answer
  $items.children().on('click', function(e) {
    playersAnswer = (e.target.className);
    if(playersAnswer === currentAnswer) {
      // find currentAnswer and remove from object array
      score ++;
      $score.text(score);
      randomToyGenerator();
    }

  });

});
