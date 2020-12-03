class Box extends BaseClass {
  constructor(x, y, width, height) {
    //super function calls the constructor of base class
    super (x,y,width,height);
    this.image=loadImage("sprites/wood1.png");
  }
  
};
