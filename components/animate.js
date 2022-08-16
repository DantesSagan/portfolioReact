// /** @type {HTMLCanvasElement} */
// export const canvas = document.getElementById('canvas1');
// export const c = canvas.getContext('2d');
// export const numbersOfEnemies = 200;
// export const enemiesArray = [];

// canvas.width = 500;
//  canvas.height = 1000;
// export const CANVAS_WIDTH = canvas.width;
// export const CANVAS_HEIGHT = canvas.height;
// // enemy1 = {
// //   x: 10,
// //   y: 50,
// //   width: 200,
// //   height: 200,
// // };

// export class BatAnimation {
//   constructor(framesMax, scale) {
//     this.image = new Image();
//     this.image.src = '../public/images/bat/morcego-Sheet.png';
//     this.width = 200;
//     this.height = 50;
//     this.x = Math.random() * (canvas.width - this.width);
//     this.y = Math.random() * (canvas.height - this.height - 200);
//     this.speed = Math.random() * 4 + 1;
//     // this.image = image;
//     // additional for animate image
//     this.scale = Math.random() * scale + 0.05;
//     this.framesMax = framesMax;
//     this.framesCurrent = 0;
//     this.framesElapsed = 0;
//     // additional for animate image
//     this.framesHold = 20;
//     this.flapSpeed = Math.floor(Math.random() * 5 + 1);
//     this.angle = Math.random() * 2;
//     this.angleSpeed = Math.random() * 2 + 0.25;
//     this.curve = Math.random() * 200 + 25;
//   }

//   // wiggling animation
//   draw() {
//     // c.fillRect(this.x, this.y, this.width, this.height);
//     // c.drawImage(this.image, this.x, this.y, this.width, this.height);
//     c.drawImage(
//       this.image,
//       this.framesCurrent * (this.image.width / this.framesMax),
//       0,
//       this.image.width / this.framesMax,
//       this.image.height,
//       this.x,
//       this.y,
//       (this.image.width / this.framesMax) * this.scale,
//       this.image.height * this.scale
//     );
//   }
//   animateFrames() {
//     // if you wanted to set movement to right or left side you need this line of code
//     // this.x -= this.speed;
//     // this is setting for circular motions of enemies
//     this.x =
//       (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
//       (canvas.width / 2 - this.width / 2);
//     // if you wanted to hold them like helicopter in flu in the air just comment out
//     // this.y += Math.random() * 7 - 2.5;
//     // for now we get cycle from 0 to random Curve value
//     // this.y += this.curve * Math.sin(this.angle);
//     this.y =
//       (canvas.height / 2) * Math.cos((this.angle * Math.PI) / 180) +
//       (canvas.height / 2 - this.height / 2);
//     this.angle += this.angleSpeed;
//     if (this.x + this.width < 0) {
//       this.x = canvas.width;
//     }
//     // Elapsed frames = истекающие кадры
//     this.framesElapsed++;
//     // this situation may be describe like this
//     // if elapsed frames divide by frames hold (which means number of stopping frames)
//     // and if this expression strict equal to 0 so let animation work
//     // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
//     // we call rest of code

//     if (this.framesElapsed % this.flapSpeed === 0) {
//       if (this.framesCurrent >= 10) {
//         this.framesCurrent = 0;
//       } else {
//         this.framesCurrent++;
//       }
//     }
//     // if (this.framesElapsed % this.framesHold === 0) {
//     //   if (this.framesCurrent < this.framesMax - 1) {
//     //     this.framesCurrent++;
//     //   } else {
//     //     this.framesCurrent = 0;
//     //   }
//     // }
//   }
//   update() {
//     // this.x -= this.speed;
//     // this.y += Math.random() * 7 - 2.5;
//     this.draw();
//     this.animateFrames();
//   }
// }

// for (let i = 0; i < numbersOfEnemies; i++) {
//   enemiesArray.push(new Enemy(11, 1.3));
// }

// console.log(enemiesArray);

// // const enemy1 = new Enemy(enemyImage);
// // const enemy2 = new Enemy();

// function animate() {
//   c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   enemiesArray.forEach((enemy) => {
//     enemy.update();
//     // enemy.draw();
//   });
//   requestAnimationFrame(animate);
// }
// animate();
