$(() => {
  console.log('JS Working');

  //get DOM elements
  const $currentToy = $('#currentToy');
  const $timer = $('#timer');
  const $go = $('#go');
  const $items = $('.items');
  const $score = $('#score');
  const $threeTwoOne = $('#three-two-one');
  const $startModal = $('#start-modal');
  const $game = $('#game');
  const $scoreModal = $('#score-modal');
  const $endScore = $('#endScore');
  const $playAgain = $('#play-again');
  const $endTitle = $('#end-title');
  const $playAgainButton = $('#play-again');
  const $gameTune = $('#game-tune');
  console.log($gameTune);

  let playersAnswer = '';
  let currentAnswer = '';
  let randomIndexNumber = 0;
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
  },
  {
    name: 'spaceship',
    image: '/images/spaceship.png',
    answer: 'spaceship'
  },
  {
    name: 'mathposter',
    image: '/images/mathposter.png',
    answer: 'mathposter'
  }, {
    name: 'bin',
    image: '/images/bin.png',
    answer: 'bin'
  }
  ];
  // threeTwoOne Function
  function threeTwoOne(){
    $timer.css('color','#D20010', 'font-size', '15px');
    let start = 3;
    // change this to the 3 second countdown
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        randomToyGenerator();
        start = 'GO!';
        clearInterval(startRunning);
        startTimer();
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $timer.text(start);
    }, 800);
  }
  let time = 60;
  //StartClock Function
  function startTimer(){
    $timer.css('color','black');
    // change this to the 3 second countdown
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 0 || toys.length === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Skip button
  $currentToy.on('click', randomToyGenerator);

  //Random Toy Generator Function
  function randomToyGenerator(){
    randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToyImage);
    currentAnswer = toys[randomIndexNumber].answer;
  }

  //Play Game Function
  $go.on('click',startGame);

  function startGame() {
    threeTwoOne();
    $game.css('display', 'block');
    $startModal.css('display','none');
  }

  //Click check answer
  $items.children().on('click', checkAnswer);

  function checkAnswer(e) {
    playersAnswer = $(e.target).attr('class');

    if(currentAnswer === playersAnswer) {
      toys.splice(randomIndexNumber, 1);
      score++;
      $score.text(score);
      if (toys.length === 0) {
        $endTitle.text('YOU DID IT!');
        $playAgainButton.text('Next Level >');
        $scoreModal.css('display','flex');
        $endScore.text(score);
      } else {
        randomToyGenerator();
      }
    }

    //Click playagain button
    $playAgain.on('click',playAgain());

    function playAgain() {
      console.log('they want to play again');
    }


  }


});
