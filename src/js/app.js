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
  const $scoreEnough = $('#scoreEnough');
  const $gameTune = $('#game-tune')[0];
  const $timeGlobe = $('#timeGlobe');
  const $soundOne = $('#sound-one')[0];
  const $soundTwo = $('#sound-two')[0];
  const $soundThree = $('#sound-three')[0];

  let playersAnswer = '';
  let currentAnswer = '';
  let randomIndexNumber = 0;
  let randomSoundIndexNumber = 0;
  let score = 0;
  let toys = [];
  let gameInPlay = false;


  //Toys Object Array
  const allToys = [{
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
  }];

  //Random Sound Generator

  let sounds = [$soundOne, $soundTwo, $soundThree];

  function randomSoundGenerator(){
    randomSoundIndexNumber = Math.floor(Math.random()*sounds.length);
    const currentSound = sounds[randomSoundIndexNumber];
    currentSound.play();
  }



  // threeTwoOne Function
  function threeTwoOne(){
    $timer.css('color','#D20010', 'font-size', '15px');
    let start = 3;
    // change this to the 3 second countdown
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        gameInPlay = true;
        randomToyGenerator();
        start = 'GO!';
        clearInterval(startRunning);
        startTimer();
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $timer.text(start);
    }, 800);
  }
  let time = 20;
  //StartClock Function
  function startTimer(){
    $timer.css('color','black');
    // change this to the 3 second countdown
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 10) {
        $timeGlobe.addClass('shake');
        $timer.css('color','red');
      } if (time === 0) {
        clearInterval(timerRunning);
        if (score >= 15) {
          $endTitle.text('TIME/S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('CONGRATS! You scored more than 16. Head to the next level!');
          $playAgainButton.text('Next Level >');
          $endScore.text(score);
        } else {
          $endTitle.text('TIME/S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('Try again Pal! You need to find more than 16 to get to the next level');
          $endScore.text(score);
        }
      } if (toys.length === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Skip button
  $currentToy.on('click', randomToyGenerator);

  //Random Toy Generator Function
  function randomToyGenerator(){
    if(!gameInPlay)return false;
    randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToyImage);
    currentAnswer = toys[randomIndexNumber].answer;
  }

  //Play Game Function
  $go.on('click',startGame);

  function startGame() {
    toys = allToys.slice(0);
    threeTwoOne();
    $game.css('display', 'block');
    $startModal.css('display','none');
    $gameTune.play();
  }

  //Click check answer
  $items.children().on('click', checkAnswer);

  function checkAnswer(e) {
    if(!gameInPlay)return false;
    playersAnswer = $(e.target).attr('class');
    if(currentAnswer === playersAnswer) {
      randomSoundGenerator();
      $(e.target).css({
        backgroundImage: 'url(/images/bam.png)',
        backgroundRepeat: 'no-repeat'
      });
      toys.splice(randomIndexNumber, 1);
      score++;
      $score.text(score);
      if (toys.length === 0) {
        $endTitle.text('YOU DID IT WITH ' + time + ' SECONDS REMAINING!');
        $scoreEnough.text('Head to the next level!');
        $playAgainButton.text('Next Level >');
        $scoreModal.css('display','flex');
        $endScore.text(score);
      } else {
        randomToyGenerator();
      }
    }
  }

  //Click playagain button
  $playAgain.on('click',playAgain);

  function playAgain(){
    gameInPlay = false;
    time = 60;
    score = 0;
    startGame();
    $scoreModal.css('display','none');
    $score.text(0);
    $timeGlobe.removeClass('shake');
    $items.children().css({
      backgroundImage: 'none'
    });
    toys = allToys.slice(0);
    $currentToy.attr('src', '/images/question-mark.png');

  }

});
