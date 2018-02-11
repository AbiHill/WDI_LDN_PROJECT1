$(() => {
  console.log('JS Working');

  //get DOM elements
  const $currentToy = $('#currentToy');
  const $skip = $('#skip');
  const $timer = $('#timer');
  const $go = $('#go');
  const $startbox = $('#startbox');
  const $items = $('.items');
  const $score = $('#score');

  let playersAnswer = '';
  let currentAnswer = '';
  let score = 0;

  //Toys Object Array
  const toys = [{
    name: 'dino',
    image: '/images/dino.png',
    answer: 'dino'
  }, {
    name: 'acid',
    image: '/images/acid.png',
    answer: 'acid'
  }, {
    name: 'blue-fish',
    image: '/images/blue-fish.png',
    answer: 'blue-fish'
  }, {
    name: 'spock',
    image: '/images/spock.png',
    answer: 'spock'
  }
  ];

  function startTimer(){
    let time = 60;
    const timerRunning = setInterval(() => {
      time -= 1;
      if (time === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }


  //Skip button
  $skip.on('click', function() {
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
    startTimer();
    $startbox.css('visibility','hidden');
  });

  //Click check answer
  $items.children().on('click', function(e) {
    playersAnswer = (e.target.className);
    if(playersAnswer === currentAnswer) {
      score ++;
      $score.text(score);
      delete currentAnswer;
      randomToyGenerator();
    }

  });

});
