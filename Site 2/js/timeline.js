// TIMELINE CANVAS 
const section1 = document.querySelector('.section1');
const canvas = document.querySelector('#timeline-canvas');
const c = canvas.getContext('2d');
window.devicePixelRatio = 2;
var scale = window.devicePixelRatio;
canvas.width = Math.floor(canvas.width * scale);
canvas.height = Math.floor(canvas.height * scale);

var languages = ['Java', 'C', 'HTML', 'CSS', 'Javasript', 'JQuery', 'Php', 'Ajax'];
for(var i = 0; i<languages.length; i++) {
    var element = document.createElement('h3');
    var text = document.createTextNode(languages[i]);
    element.appendChild(text);
    element.setAttribute('id', 'lang_'+i);
    element.classList = 'lang';
    section1.appendChild(element);
}

class Pointer {
  constructor(x, y, endx, endy, down) {
    this.x = x;
    this.y = y;
    this.endx = endx;
    this.endy = endy;
    this.down = down;
    this.draw();
  }
  
  draw() {
    if(this.down == true) {
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.x, this.endy - 20);
      c.strokeStyle = 'black';
      c.stroke();
      c.closePath();

      c.beginPath();
      c.moveTo(this.x, this.endy - 20);
      c.arcTo(this.x, this.endy, this.endx, this.endy, 10);
      c.strokeStyle = 'black';
      c.stroke();

      c.lineTo(this.endx, this.endy);
      c.stroke();
      c.closePath();

    //   arrow head 
      c.beginPath();
      c.moveTo(this.endx, this.endy);
      c.lineTo(this.endx - 5, this.endy - 5);
      c.lineTo(this.endx - 5, this.endy + 5);
      c.fill();
    } else {
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.endx - 20, this.y);
      c.stroke();
      c.closePath()

      c.beginPath();
      c.moveTo(this.endx - 20, this.y);
      c.arcTo(this.endx, this.y, this.endx, this.endy, 10);
      c.stroke();

      c.lineTo(this.endx, this.endy);
      c.stroke();
      c.closePath();

      //   arrow head 
      c.beginPath();
      c.moveTo(this.endx, this.endy);
      c.lineTo(this.endx - 5, this.endy - 5);
      c.lineTo(this.endx + 5, this.endy - 5);
      c.fill();
    }
  }
}

const pointer1 = new Pointer(50, 50, 90, 75, true);
const pointer2 = new Pointer(105, 75, 165, 95, false);
const pointer3 = new Pointer(165, 120, 200, 126, true);
const pointer4 = new Pointer(230, 126, 285, 145, false);
const pointer5 = new Pointer(285, 165, 360, 190, true);
const pointer6 = new Pointer(410, 190, 470, 215, false);
const pointer7 = new Pointer(470, 230, 550, 255, true);
