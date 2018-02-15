//Variables
let playersAnswer = '';
let currentAnswer = '';
let randomIndexNumber = 0;
let randomSoundIndexNumber = 0;
let score = 0;
let toys = [];
let gameInPlay = false;
let time = 30;


//Toys Object Array Level One
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

//Toys Object Array Level Two
const allToysLevelTwo = [{
  name: 'book',
  image: '/images/level-two-toys/book.png',
  answer: 'book'
}, {
  name: 'bottle',
  image: '/images/level-two-toys/bottle.png',
  answer: 'bottle'

}, {
  name: 'clock-two',
  image: '/images/level-two-toys/clock.png',
  answer: 'clock-two'
}, {
  name: 'cup',
  image: '/images/level-two-toys/cup.png',
  answer: 'cup'
}, {
  name: 'cusion',
  image: '/images/level-two-toys/cusion.png',
  answer: 'cusion'
}, {
  name: 'pot',
  image: '/images/level-two-toys/pot.png',
  answer: 'pot'
}, {
  name: 'slipper-two',
  image: '/images/level-two-toys/slipper.png',
  answer: 'slipper-two'
}, {
  name: 'soap',
  image: '/images/level-two-toys/soap.png',
  answer: 'soap'
}, {
  name: 'sock',
  image: '/images/level-two-toys/sock.png',
  answer: 'sock'
}, {
  name: 'spatu',
  image: '/images/level-two-toys/spatu.png',
  answer: 'spatu'
}, {
  name: 'sugar',
  image: '/images/level-two-toys/sugar.png',
  answer: 'sugar'
}, {
  name: 'vase',
  image: '/images/level-two-toys/vase.png',
  answer: 'vase'
}];


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
  const $goSound = $('#goSound')[0];
  const $levelTwo = $('#level-two');
  const $body = $('body');
  const $itemsLevelTwo = $('#items-level-two');
  const $playAgainTwo = $('#play-again-two');
  const $scoreBox = $('.score-box');
  const $pointer = $('#pointer');
  const $levelTwoSound = $('#levelTwoSound')[0];
  const $popOne = $('#pop-one')[0];
  const $popTwo = $('#pop-two')[0];
  const $popThree = $('#pop-three')[0];
  const $winnerSound = $('#winner-sound')[0];
  const $scoreP = $('#scoreP');

  //Dom Variables
  const sounds = [$soundOne, $soundTwo, $soundThree];
  const soundsTwo = [$popOne, $popTwo, $popThree];

  //Random Sound Generator one
  function randomSoundGenerator(){
    randomSoundIndexNumber = Math.floor(Math.random()*sounds.length);
    const currentSound = sounds[randomSoundIndexNumber];
    currentSound.play();
  }
  //Random Sound Generator Two
  function randomSoundGeneratorTwo(){
    randomSoundIndexNumber = Math.floor(Math.random()*soundsTwo.length);
    const currentSound = soundsTwo[randomSoundIndexNumber];
    currentSound.play();
  }

  // Three Two One count down Function One
  function threeTwoOne(){
    $timer.css('color','#D20010', 'font-size', '15px');
    let start = 3;
    // change this to the 3 second countdown
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        $goSound.play();
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


  // 30 seconds count down Function

  function startTimer(){
    $timer.css('color','black');
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 10) {
        $timeGlobe.addClass('shake');
        $timer.css('color','red');
      } if (time === 0) {
        clearInterval(timerRunning);
        if (score >= 12) {
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('CONGRATS! You scored more than 12. Head to the next level!');
          $playAgainButton.css('display','none');
          $levelTwo.css('display','block');
          $endScore.text(score);
          $playAgainTwo.css('display','none');
          $playAgainButton.css('display','none');
        } else {
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('Try again Pal! You need to find more than 12 to get to the next level');
          $playAgainTwo.css('display','none');
          $endScore.text(score);
          $levelTwo.css('display','none');
        }
      } if (toys.length === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Skip Button
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

  //When an item is clicked, check the answer
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
        $playAgainButton.css('display','none');
        $playAgainTwo.css('display','none');
        $scoreModal.css('display','flex');
        $endScore.text(score);
      } else {
        randomToyGenerator();
      }
    }
  }

  //Click play Again button
  $playAgain.on('click',playAgain);

  //Click play Again Reset Function
  function playAgain(){
    gameInPlay = false;
    time = 30;
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

  //------------------Level Two Go ------------------------------------
  $levelTwo.on('click', runLevelTwo);

  //Run Level Two Function
  function runLevelTwo(){
    $levelTwoSound.play();
    toys = allToysLevelTwo.slice(0);
    $itemsLevelTwo.children().css({
      backgroundImage: 'none'
    });
    $body.css('backgroundImage', 'url(/images/bedroom-two.jpg)');
    gameInPlay = false;
    time = 20;
    score = 0;
    $score.text(0);
    $items.css('display','none');
    $scoreModal.css('display','none');
    $itemsLevelTwo.css('display','block');
    $gameTune.pause();
    threeTwoOneLevelTwo();
    $currentToy.attr('src', '/images/question-mark.png');
    $pointer.removeClass('pointer');
    $pointer.addClass('pointerTwo');
    $timeGlobe.attr('src','/images/level-two-toys/timerTwo.png');
  }

  //Level Two Toy Generator
  function randomToyGeneratorTwo(){
    randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToyImage);
    currentAnswer = toys[randomIndexNumber].answer;
  }
  //When an item is clicked, check if the answer is correct
  $itemsLevelTwo.children().on('click', checkAnswerTwo);

  function checkAnswerTwo(e) {
    playersAnswer = $(e.target).attr('class');
    if(currentAnswer === playersAnswer) {
      randomSoundGeneratorTwo();
      $(e.target).css({
        backgroundImage: 'url(/images/level-two-toys/poof.png)',
        backgroundRepeat: 'no-repeat'
      });
      toys.splice(randomIndexNumber, 1);
      score++;
      $score.text(score);
      if (toys.length === 0) {
        $endTitle.text('CONGRATS! You Won!');
        $scoreBox.css({backgroundImage: 'url(/images/winner.gif)', height: '420px'});
        $scoreModal.css({
          display: 'flex'
        });
        $winnerSound.play();
        $levelTwoSound.pause();
        $itemsLevelTwo.css('display','none');
        $playAgainButton.css('display','none');
        $playAgainTwo.css('display','none');
        $levelTwo.css('display','none');
        $endScore.css('display','none');
        $scoreEnough.css('display','none');
        $scoreP.css('display','none');
      } else {
        randomToyGeneratorTwo();
      }
    }
  }

  //threeTwo One Timer Two
  function threeTwoOneLevelTwo(){
    $timer.css('color','#D20010', 'font-size', '15px');
    let start = 3;
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        $goSound.play();
        randomToyGeneratorTwo();
        start = 'GO!';
        clearInterval(startRunning);
        startTimerTwo();
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $timer.text(start);
    }, 800);
  }
  // Start Timer Two 20 seconds
  function startTimerTwo(){
    $timer.css('color','black');
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 10) {
        $timeGlobe.addClass('shake');
        $timer.css('color','red');
      } if (time === 0) {
        clearInterval(timerRunning);
        if (score >= 12) {
          $endTitle.text('TIME\'S UP');
          $scoreBox.css({backgroundImage: 'url(/images/winner.gif)', height: '420px'});
          $scoreModal.css({
            display: 'flex'
          });
          $winnerSound.play();
          soundsTwo.pause();
          $itemsLevelTwo.css('display','none');
          $scoreEnough.text('CONGRATS! You Won!');
          $playAgainButton.css('display','none');
          $playAgainTwo.css('display','none');
          $levelTwo.css('display','none');
          $endScore.text(score);
        } else {
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          $scoreBox.css('background','#a64bcc');
          $scoreEnough.text('Try again Pal! You need to find all 12 items to win');
          $endScore.text(score);
          $levelTwo.css('display','none');
          $playAgainButton.css('display','none');
          $playAgainTwo.css('display','block');
        }
      } if (toys.length === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Click play Again button
  $playAgainTwo.on('click',runLevelTwo);

});
