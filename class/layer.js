/** @type {HTMLCanvasElement} */
export class Layer {
  constructor(
    image,
    speedModifierLocal,
    scale,
    width,
    height,
    gameSpeedGlobal,
    c
  ) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.c = c;
    this.gameSpeedGlobal = gameSpeedGlobal;
    // this.framesMax = framesMax;
    this.scale = Math.random() * scale + 0.05;
    // this.x2 = this.width;
    this.image = image;
    this.speedModifierLocal = speedModifierLocal;
    this.speed = this.gameSpeedGlobal * this.speedModifierLocal;
    // this.currentFrame = gameFrame;
    // this.gameFrameElapsed = gameFrameElapsed;
    // this.gameFrameHold = gameFrameHold;
  }
  update() {
    this.speed = this.gameSpeedGlobal * this.speedModifierLocal;
    // if you change this line of code to this
    // Where is will be smooth transition between changing speed of frames
    // without flickering and stopping
    this.x = (this.x - this.speed) % this.width;
    // this.scale = 1.15 * Math.cos(this.scale)
    //     if (this.x <= -this.width) {
    //       this.x = this.width + this.x2 - this.speed;
    //     }
  }
  draw() {
    console.log(this.c);
    this.c.drawImage(
      this.image,
      this.x,
      this.y,
      this.width * 1.5 * this.scale,
      this.height * 1.5 * this.scale
    );
    this.c.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width * 1.5 * this.scale,
      this.height * 1.5 * this.scale
    );
  }
}
