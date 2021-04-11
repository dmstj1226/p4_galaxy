var angle = 1.5; // 나선형 은하수 각도
var scalar = 5;
var speed = 0.1;
var stars = [] ; // 별들의 집합

class star {
  constructor(x,y,sz) {
    this.x = x ; // 별의 x 좌표
    this.y = y ; // 별의 y 좌표
    this.sz = sz ; // 별 사이즈
  }
  
  display(){
    ellipse(this.x, this.y, this.sz, this.sz) ; // 별들 그리기
    fill(random(255),random(150)) ; 
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50) ;
  
}

function setGradient(color_from, color_to) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(color_from, color_to, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  
  for (let i = 0 ; i < 1000 ; i ++) {
    stars.push(new star(random(windowWidth),
                        random(windowHeight),
                        random(3),
                        random(250))) ;
    
    var s = stars[i] ;
    s.display() ;
    
  
  }
  
  var x = mouseX + cos(angle) * scalar;
  var y = mouseY + sin(angle+10) * scalar;
  fill(random(200,255), random(200,215), random(150,190),random(150));
  noStroke();
  ellipse(x, y, 4, 3);
  angle += speed;
  scalar += speed; // 나선형 은하수 만들기 
  
  
  
}