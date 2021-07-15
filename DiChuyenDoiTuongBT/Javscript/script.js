
function Hero(image, speed, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('ok moveRight: ' + this.left);
  }

  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('ok moveLeft: ' + this.left);
  }

  this.moveTop = function () {
    this.top -= this.speed;
    console.log('ok moveTop: ' + this.top);
  }

  this.moveBottom = function () {
    this.top += this.speed;
    console.log('ok moveBottom: ' + this.top);
  }
}

var hero = new Hero('../Image/Purin.jpg', 90, 0, 0, 200);

function start() {
  //console.log(hero.left)
  if (hero.left + 40 < window.innerWidth - hero.size && hero.top - 10 < 0) {
    hero.moveRight();
  }

  if (hero.left + 40 > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveBottom();
  } 

  if (hero.top + 40 > window.innerHeight - hero.size && hero.left > 0) {
    hero.moveLeft();
  }

  if (hero.left <= 0 && hero.top > 0) {
    hero.moveTop();
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();