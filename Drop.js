class Drop {
  
  constructor(font){
    this.x = random(width);
    this.y = random(height);
    this.z = random(10);
    this.len = map(this.z, 0, 10, 10, 20);
    this.speed = map(this.z, 0, 10, 3, 13);
    this.color = random(255);
    this.letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z','0','1','2','3','4','5','6','7','8','9'];
    this.currentLetter = this.letters[floor(random(this.letters.length))];
    this.letterStack = [];
    
    textFont(font);
    textSize(floor(fontsize));
    textAlign(CENTER, CENTER);
  }
  
  display(){
    //stroke(0,this.color,-0);
    //line(this.x,this.y,this.x,this.y + this.len);
    fill(255);
    text(this.currentLetter, this.x, this.y);
    
    if(frameCount % 3 == 0){
      this.letterStack.push(new Letter(this.currentLetter, this.x, this.y, 255));
      this.currentLetter = this.letters[floor(random(6))];
    }
    
    for(let i = 0 ; i < this.letterStack.length; i++){
      var letter = this.letterStack[i];

      if(letter.colorValue > -100){
        fill(0 , letter.colorValue, 0);
        text(letter.letter, letter.x, letter.y);
        letter.updateColor(letter.colorValue - 10);
      
        this.letterStack[i] = letter;
      }else{
        this.letterStack.splice(i,i);
      }
      
    }
  }
  
  fall(){
    this.y = this.y + this.speed;
    this.yHeight = this.yHeight + this.speed;
    
    if(this.y > height){
      this.y = 0;
    }
    
  }
}

class Letter {
  constructor(letter,x, y, colorValue){
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.colorValue = colorValue;
  }
  
  updateColor(newColorValue){
    this.colorValue = newColorValue;
  }
}
