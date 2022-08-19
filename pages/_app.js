// /** @type {HTMLCanvasElement} */
import React, { useEffect, useState } from 'react';

import Footer from '@components/footer';
import NavBar from '@components/navbar';
import 'styles/globals.css';
import { Layer } from 'class/layer';

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(true);
  const [gameSpeedGlobal, setGameSpeedGlobal] = useState(2);

  useEffect(() => {
    // const batImage = '/images/bat/morcego-Sheet.png';
    // const lightImage = '/images/голова_с_очками-3-removebg.png';
    // const imageChanger = mode ? batImage : lightImage;

    const canvas = document.getElementById('canvas1');
    const c = canvas.getContext('2d');
    const numbersOfSprites = 50;
    const spritesArray = [];
    let width;
    let height;
    let globalScale;
    let offsetWidth = 0;
    let offsetHeight = 100;

    // this is for responsible design when you have different inner width of you device
    window.innerWidth >= 1900
      ? (canvas.width = 1920) &&
        (canvas.height = 1000) &&
        (width = 1000) &&
        (height = 1000) &&
        (globalScale = 1) &&
        (offsetWidth = 0) &&
        (offsetHeight = 100)
      : window.innerWidth >= 1600
      ? (canvas.width = 1620) &&
        (canvas.height = 900) &&
        (width = 900) &&
        (height = 900) &&
        (globalScale = 1) &&
        (offsetWidth = 0) &&
        (offsetHeight = 100)
        : window.innerWidth >= 1536
      ? (canvas.width = 1536) &&
        (canvas.height = 800) &&
        (width = 800) &&
        (height = 800) &&
        (globalScale = 1) &&
        (offsetWidth = 0) &&
        (offsetHeight = 100)
      : window.innerWidth >= 1400
      ? (canvas.width = 1420) &&
        (canvas.height = 800) &&
        (width = 800) &&
        (height = 800) &&
        (globalScale = 1) &&
        (offsetWidth = 0) &&
        (offsetHeight = 100)
      : window.innerWidth >= 1200
      ? (canvas.width = 1220) &&
        (canvas.height = 700) &&
        (width = 700) &&
        (height = 700) &&
        (globalScale = 0.8) &&
        (offsetWidth = 50) &&
        (offsetHeight = 100)
      : window.innerWidth >= 800
      ? (canvas.width = 820) &&
        (canvas.height = 600) &&
        (width = 600) &&
        (height = 600) &&
        (globalScale = 0.7) &&
        (offsetWidth = 50) &&
        (offsetHeight = 25)
      : window.innerWidth >= 600
      ? (canvas.width = 620) &&
        (canvas.height = 500) &&
        (width = 500) &&
        (height = 500) &&
        (globalScale = 0.6) &&
        (offsetWidth = 15) &&
        (offsetHeight = 15)
      : window.innerWidth >= 425
      ? (canvas.width = 540) &&
        (canvas.height = 400) &&
        (width = 400) &&
        (height = 400) &&
        (globalScale = 0.5) &&
        (offsetWidth = 50) &&
        (offsetHeight = 25)
      : window.innerWidth >= 375
      ? (canvas.width = 495) &&
        (canvas.height = 350) &&
        (width = 350) &&
        (height = 350) &&
        (globalScale = 0.4) &&
        (offsetWidth = 50) &&
        (offsetHeight = 15)
      : window.innerWidth >= 320
      ? (canvas.width = 440) &&
        (canvas.height = 300) &&
        (width = 300) &&
        (height = 300) &&
        (globalScale = 0.4) &&
        (offsetWidth = 50) &&
        (offsetHeight = 15)
      : (canvas.width = 1920) && (canvas.height = 1000);

    console.log(window.innerWidth);
    // canvas.width = 1920;
    // canvas.height = 1000;

    // const CANVAS_WIDTH = canvas.width;
    // const CANVAS_HEIGHT = canvas.height;

    // Class of bat animation
    class BatAnimation {
      constructor(framesMax, scale) {
        this.image = new Image();
        this.image.src = '/images/bat/morcego-Sheet.png';
        this.width = 200;
        this.height = 50;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        // this.image = image;
        // additional for animate image
        this.scale = Math.random() * scale * globalScale + 0.05;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        // additional for animate image
        this.framesHold = 20;
        this.flapSpeed = Math.floor(Math.random() * 5 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.5 + 0.25;
        this.curve = Math.random() * 200 + 25;
      }

      // wiggling animation
      draw() {
        // c.fillRect(this.x, this.y, this.width, this.height);
        // c.drawImage(this.image, this.x, this.y, this.width, this.height);
        c.drawImage(
          this.image,
          this.framesCurrent * (this.image.width / this.framesMax),
          0,
          this.image.width / this.framesMax,
          this.image.height,
          this.x,
          this.y,
          (this.image.width / this.framesMax) * this.scale,
          this.image.height * this.scale
        );
      }
      animateFrames() {
        // if you wanted to set movement to right or left side you need this line of code
        // this.x -= this.speed;
        // this is setting for circular motions of enemies
        this.x =
          (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
          (canvas.width / 2 - this.width / 2) +
          offsetWidth;
        // if you wanted to hold them like helicopter in flu in the air just comment out
        // this.y += Math.random() * 7 - 2.5;
        // for now we get cycle from 0 to random Curve value
        // this.y += this.curve * Math.sin(this.angle);
        this.y =
          (canvas.height / 2) * Math.cos((this.angle * Math.PI) / 90) +
          (canvas.height / 2 - this.height / 2) -
          offsetHeight;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) {
          this.x = canvas.width;
        }
        // Elapsed frames = истекающие кадры
        this.framesElapsed++;
        // this situation may be describe like this
        // if elapsed frames divide by frames hold (which means number of stopping frames)
        // and if this expression strict equal to 0 so let animation work
        // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
        // we call rest of code

        if (this.framesElapsed % this.flapSpeed === 0) {
          if (this.framesCurrent >= 10) {
            this.framesCurrent = 0;
          } else {
            this.framesCurrent++;
          }
        }
        // if (this.framesElapsed % this.framesHold === 0) {
        //   if (this.framesCurrent < this.framesMax - 1) {
        //     this.framesCurrent++;
        //   } else {
        //     this.framesCurrent = 0;
        //   }
        // }
      }
      update() {
        // this.x -= this.speed;
        // this.y += Math.random() * 7 - 2.5;
        this.draw();
        this.animateFrames();
      }
    }

    // Class of bird(blue) animation
    class BirdAnimation {
      constructor(framesMax, scale) {
        this.image = new Image();
        this.image.src = '/images/birds/blue-bird-reverse.png';
        this.width = 316;
        this.height = 42;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        // this.image = image;
        // additional for animate image
        this.scale = Math.random() * scale * globalScale + 0.05;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.counterToZero = 5;
        this.framesElapsed = 0;
        // additional for animate image
        this.framesHold = 20;
        this.flapSpeed = Math.floor(Math.random() * 1.2 + 1);
        this.angle = Math.random() * 1.5;
        this.angleSpeed = Math.random() * 0.25 + 0.25;
        this.curve = Math.random() * 20 + 0.25;
      }

      // wiggling animation
      draw() {
        // c.fillRect(this.x, this.y, this.width, this.height);
        // c.drawImage(this.image, this.x, this.y, this.width, this.height);
        c.drawImage(
          this.image,
          this.framesCurrent * (this.image.width / this.framesMax),
          0,
          this.image.width / this.framesMax,
          this.image.height,
          this.x,
          this.y - 200,
          (this.image.width / this.framesMax) * this.scale,
          this.image.height * this.scale
        );
      }
      animateFrames() {
        // if you wanted to set movement to right or left side you need this line of code
        this.x -= this.speed;
        // this is setting for circular motions of enemies
        //  this.x =
        //    (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
        //    (canvas.width / 2 - this.width / 2);
        // if you wanted to hold them like helicopter in flu in the air just comment out
        //  this.y += Math.random() * 7 - 2.5;
        // for now we get cycle from 0 to random Curve value
        // if (this.y + this.height + this.image.height >= canvas.height - 350) {
        //   this.y -= this.curve * Math.cos(this.angle);
        // }
        if (this.y + this.height <= 0) {
          this.y = canvas.height - 350;
        }
        this.angle += this.angleSpeed;
        this.y =
          ((canvas.height - 450) / 1.95) *
            Math.cos((this.angle * Math.PI) / 90) +
          canvas.height / 1.25;

        if (this.x + this.width <= 0) {
          this.x = canvas.width;
        }

        // this.y += this.curve * Math.cos(this.angle);
        // Elapsed frames = истекающие кадры
        this.framesElapsed++;
        // this situation may be describe like this
        // if elapsed frames divide by frames hold (which means number of stopping frames)
        // and if this expression strict equal to 0 so let animation work
        // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
        // we call rest of code

        if (this.framesElapsed % this.flapSpeed === 0) {
          if (this.framesCurrent > 5) {
            this.framesCurrent = 0;
            // 3) and if he reach 0 there will be set by timeout frames current of 0 by 2 seconds
          } else if (this.counterToZero === 0) {
            setTimeout(() => {
              this.framesCurrent = 0;
              // 1) this is need  increment count for reaching 5 number
              this.counterToZero++;
            }, 2000);
          } else {
            this.framesCurrent++;
            // 2) and then decreasing by 0.5 while this counter reach 0
            this.counterToZero -= 0.5;
          }
        }
        // if (this.framesElapsed % this.framesHold === 0) {
        //   if (this.framesCurrent < this.framesMax - 1) {
        //     this.framesCurrent++;
        //   } else {
        //     this.framesCurrent = 0;
        //   }
        // }
      }
      update() {
        // this.x -= this.speed;
        // this.y += Math.random() * 7 - 2.5;
        this.draw();
        this.animateFrames();
      }
    }
    // Class of bird(white) animation
    class WhiteBirdAnimation {
      constructor(framesMax, scale) {
        this.image = new Image();
        this.image.src = '/images/birds/birds-white-reverseTwo.png';
        this.width = 270;
        this.height = 85;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        // this.image = image;
        // additional for animate image
        this.scale = Math.random() * scale * globalScale + 0.05;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.counterToZero = 5;
        this.framesElapsed = 0;
        // additional for animate image
        this.framesHold = 20;
        this.flapSpeed = Math.floor(Math.random() * 1.2 + 1);
        this.angle = Math.random() * 1.5;
        this.angleSpeed = Math.random() * 0.25 + 0.25;
        this.curve = Math.random() * 20 + 0.25;
      }

      // wiggling animation
      draw() {
        // c.fillRect(this.x, this.y, this.width, this.height);
        // c.drawImage(this.image, this.x, this.y, this.width, this.height);
        c.drawImage(
          this.image,
          this.framesCurrent * (this.image.width / this.framesMax),
          0,
          this.image.width / this.framesMax,
          this.image.height,
          this.x,
          this.y - 200,
          (this.image.width / this.framesMax) * this.scale,
          this.image.height * this.scale
        );
      }
      animateFrames() {
        // if you wanted to set movement to right or left side you need this line of code
        this.x -= this.speed;
        // this is setting for circular motions of enemies
        //  this.x =
        //    (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
        //    (canvas.width / 2 - this.width / 2);
        // if you wanted to hold them like helicopter in flu in the air just comment out
        //  this.y += Math.random() * 7 - 2.5;
        // for now we get cycle from 0 to random Curve value
        // if (this.y + this.height + this.image.height >= canvas.height - 350) {
        //   this.y -= this.curve * Math.cos(this.angle);
        // }
        if (this.y + this.height <= 0) {
          this.y = canvas.height - 350;
        }
        this.angle += this.angleSpeed;
        this.y =
          ((canvas.height - 450) / 1.95) *
            Math.cos((this.angle * Math.PI) / 90) +
          canvas.height / 1.25;

        if (this.x + this.width <= 0) {
          this.x = canvas.width;
        }

        // this.y += this.curve * Math.cos(this.angle);
        // Elapsed frames = истекающие кадры
        this.framesElapsed++;
        // this situation may be describe like this
        // if elapsed frames divide by frames hold (which means number of stopping frames)
        // and if this expression strict equal to 0 so let animation work
        // takes frames elapsed divided by frames hold and if the remainder(остаток) is zero
        // we call rest of code

        if (this.framesElapsed % this.flapSpeed === 0) {
          if (this.framesCurrent > 5) {
            this.framesCurrent = 0;
            // 3) and if he reach 0 there will be set by timeout frames current of 0 by 2 seconds
          } else if (this.counterToZero === 3) {
            setTimeout(() => {
              this.framesCurrent = 3;
              // 1) this is need  increment count for reaching 5 number
              this.counterToZero+=1.5;
            }, 1000);
          } else {
            this.framesCurrent++;
            // 2) and then decreasing by 0.5 while this counter reach 0
            this.counterToZero -= 0.5;
          }
        }
      }
      update() {
        // this.x -= this.speed;
        // this.y += Math.random() * 7 - 2.5;
        this.draw();
        this.animateFrames();
      }
    }

    // let gameSpeedGlobal = 2;
    // let gameFrame = 0;
    // let gameFrameElapsed = 0;
    // let gameFrameHold = 10;
    // let vol = document.getElementById('inputGameSpeedGlobal');
    // vol.value = gameSpeedGlobal;
    // const ChangeGameSpeedGlobal = () => {
    //   const result = document.getElementById('result');
    //   result.innerHTML = gameSpeedGlobal;
    //   const inputHandler = (e) => {
    //     gameSpeedGlobal = e.target.value;
    //     result.innerHTML = e.target.value;
    //   };
    //   console.log(`${gameSpeedGlobal} = speed`);
    //   vol.addEventListener('change', inputHandler); // for IE8
    // };
    // Background layers of mountains and clouds
    // This is might be changed if you switch to another white mode or dark mode of the site
    const backgroundLayer0 = new Image();
    mode
      ? (backgroundLayer0.src = '/images/background/Layers/Background01.png')
      : (backgroundLayer0.src =
          '/images/background/LayersNight/Background01 - Night.png');
    const backgroundLayer1 = new Image();
    mode
      ? (backgroundLayer1.src = '/images/background/Layers/Background02.png')
      : (backgroundLayer1.src =
          '/images/background/LayersNight/Background02 - Night.png');
    const backgroundLayer2 = new Image();
    mode
      ? (backgroundLayer2.src =
          '/images/background/Layers/BackgroundMountain_01.png')
      : (backgroundLayer2.src =
          '/images/background/LayersNight/BackgroundMountain_01 - Night.png');
    const backgroundLayer3 = new Image();
    mode
      ? (backgroundLayer3.src =
          '/images/background/Layers/BackgroundMountain_02.png')
      : (backgroundLayer3.src =
          '/images/background/LayersNight/BackgroundMountain_02 - Night.png');
    const backgroundLayer4 = new Image();
    mode
      ? (backgroundLayer4.src = '/images/background/Layers/Cloud01.png')
      : (backgroundLayer4.src =
          '/images/background/LayersNight/Cloud01 - Night.png');
    const backgroundLayer5 = new Image();
    mode
      ? (backgroundLayer5.src = '/images/background/Layers/Cloud02.png')
      : (backgroundLayer5.src =
          '/images/background/LayersNight/Cloud02 - Night.png');
    const backgroundLayer6 = new Image();
    mode
      ? (backgroundLayer6.src = '/images/background/Layers/Cloud03.png')
      : (backgroundLayer6.src =
          '/images/background/LayersNight/Cloud03 - Night.png');
    const backgroundLayer7 = new Image();
    mode
      ? (backgroundLayer7.src = '/images/background/Layers/Clouds04.png')
      : (backgroundLayer7.src =
          '/images/background/LayersNight/Clouds04 - Night.png');

    // window.addEventListener('load', () => {
    // let x = 0;
    // let x2 = 270;

    // This is for layer of clouds when they have different scales between 1.5 and current default scale
    // And also switching between white and dark mode

    // This is background layers of mountains which is also may be swtching between white and dark mode
    class LayerBackground {
      constructor(image, speedModifierLocal) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        // this.framesMax = framesMax;
        // this.x2 = this.width;
        this.image = image;
        this.speedModifierLocal = speedModifierLocal;
        this.speed = gameSpeedGlobal * this.speedModifierLocal;
        // this.currentFrame = gameFrame;
        // this.gameFrameElapsed = gameFrameElapsed;
        // this.gameFrameHold = gameFrameHold;
      }
      update() {
        this.speed = gameSpeedGlobal * this.speedModifierLocal;
        // if you change this line of code to this
        // Where is will be smooth transition between changing speed of frames
        // without flickering and stopping
        this.x = (this.x - this.speed) % this.width;
        //     if (this.x <= -this.width) {
        //       this.x = this.width + this.x2 - this.speed;
        //     }
      }
      draw() {
        // this.scale = Math.random() * 2 + 0.05;
        c.drawImage(this.image, this.x, this.y, this.width, this.height);
        c.drawImage(
          this.image,
          this.x + this.width,
          this.y,
          this.width,
          this.height
        );
      }
    }
    const layer0 = new LayerBackground(backgroundLayer0, 0);
    const layer1 = new LayerBackground(backgroundLayer1, 0);
    const layer2 = new LayerBackground(backgroundLayer2, 0);
    const layer3 = new LayerBackground(backgroundLayer3, 0);

  
    class Layer {
      constructor(image, speedModifierLocal, scale) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        // this.framesMax = framesMax;
        this.scale = Math.random() * scale + 0.05;
        // this.x2 = this.width;
        this.image = image;
        this.speedModifierLocal = speedModifierLocal;
        this.speed = gameSpeedGlobal * this.speedModifierLocal;
        // this.currentFrame = gameFrame;
        // this.gameFrameElapsed = gameFrameElapsed;
        // this.gameFrameHold = gameFrameHold;
      }
      update() {
        this.speed = gameSpeedGlobal * this.speedModifierLocal;
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
        c.drawImage(
          this.image,
          this.x,
          this.y,
          this.width * 1.5 * this.scale,
          this.height * 1.5 * this.scale
        );
        c.drawImage(
          this.image,
          this.x + this.width,
          this.y,
          this.width * 1.5 * this.scale,
          this.height * 1.5 * this.scale
        );
      }
    }

    const layer4 = new Layer(
      backgroundLayer4,
      1.5,
      1,
      width
      // height,
      // gameSpeedGlobal,
      // c
    );
    const layer5 = new Layer(
      backgroundLayer5,
      1.6,
      1,
      width
      // height,
      // gameSpeedGlobal,
      // c
    );
    const layer6 = new Layer(
      backgroundLayer6,
      1,
      1,
      1,
      width
      // height,
      // gameSpeedGlobal,
      // c
    );
    const layer7 = new Layer(
      backgroundLayer7,
      2.5,
      1,
      width
      // height,
      // gameSpeedGlobal,
      // c
    );

    // this is sequence of the parallax layers
    const gameObjectsOnBG = [
      layer0,
      layer1,
      layer2,
      layer3,
      layer4,
      layer5,
      layer6,
      layer7,
    ];
    // This is for loop for setting number of sprites which will be displayed every call
    // And also this is might be switch between white(blue and white birds) and dark(bat animal)
    for (let i = 0; i < numbersOfSprites; i++) {
      mode
        ? spritesArray.push(new BirdAnimation(5, 1.3)) &&
          spritesArray.push(new WhiteBirdAnimation(5, 1.3))
        : spritesArray.push(new BatAnimation(11, 1.3));
    }
    // console.log(spritesArray);
    // This is function which do animate and recall over and over
    function animate() {
      // Where if animate of layers is done this is will be clear rectangle where animate starts over again
      c.clearRect(0, 0, canvas.width, canvas.height);
      // For this we take each element from array and do draw and update method which
      // Creates animate to mountains and clouds animate
      gameObjectsOnBG.forEach((gameLayer) => {
        gameLayer.draw();
        gameLayer.update();
      });
      // This is for each method to array contains birds and bat animate where we are calling update method
      spritesArray.forEach((sprites) => {
        sprites.update();
        // enemy.draw();
      });

      // if (x < -270) x = 270 + x2 - gameSpeedGlobal;
      // else x -= gameSpeedGlobal;
      // if (x2 < -270) x2 = 270 + x - gameSpeedGlobal;
      // else x2 -= gameSpeedGlobal;
      // For now we are returning animate function  like argument in method of requestAnimationFrame
      requestAnimationFrame(animate);
    }
    // And call in outsite for every single animation loop
    animate();
    // });
  }, [mode, gameSpeedGlobal]);

  if (typeof window !== 'undefined') {
    console.log('not');
  } else {
    console.log('server');
  }

  return (
    <div
      className={`${
        mode
          ? 'relative z-1 before:bg-gradient-to-r before:from-yellow-100 before:via-blue-200 before:to-blue-500  transition duration-300 text-white overflow-hidden before:bg-fixed before:bg-center before:inset-0 before:fixed before:-z-1 before:content-[" "] before:top-0 before:left-0 before:w-full'
          : 'relative z-1 before:bg-gradient-to-l before:from-black before:via-gray-700 before:to-gray-600  transition duration-300 text-white overflow-hidden before:bg-fixed before:bg-center before:inset-0 before:fixed before:-z-1 before:content-[" "] before:top-0 before:left-0 before:w-full'
      }`}
    >
      <canvas
        id='canvas1'
        className='absolute h-full w-full'
        style={{ borderRadius: '15px' }}
      ></canvas>
      <div className='relative'>
        {mode ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-72 w-72 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 rounded-full z-1 absolute delay-200 ease-out  sun -top-24 -left-24 blur-sm  transition duration-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-72 w-72 bg-gradient-to-r from-white to-transparent rounded-full -z-1 absolute  blur-sm delay-200 ease-in-out moon -top-24 -right-24 transition duration-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        )}
      </div>
      <NavBar mode={mode} setMode={setMode} />
      <div className='transition duration-600 mt-6' style={{ height: '850px' }}>
        {' '}
        <Component mode={mode} setMode={setMode} {...pageProps} />
      </div>
      <Footer
        mode={mode}
        setMode={setMode}
        gameSpeedGlobal={gameSpeedGlobal}
        setGameSpeedGlobal={setGameSpeedGlobal}
      />
    </div>
  );
}
