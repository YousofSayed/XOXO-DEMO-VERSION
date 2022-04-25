let left = document.querySelectorAll(".left span");
let right = document.querySelectorAll(".right span");

let playArea = document.querySelector(".play-area ");
console.log(playArea);

let winner = document.querySelector(".winner");
let button = document.querySelector(".winner button");

//audios
let tine = document.querySelector(".tine");
let music = document.querySelector(".music");
//audios

//dark-mode-button;
let header = document.querySelector(".header");

window.addEventListener(
  "load",
  function () {
    window.localStorage.clear();
    winner.style.cssText=`display:none`
  },
  { once: true }
);

let one = document.querySelector(`.one`);
let two = document.querySelector(`.two`);
let three = document.querySelector(`.three`);
let four = document.querySelector(`.four`);
let five = document.querySelector(`.five`);
let six = document.querySelector(`.six`);
let seven = document.querySelector(`.seven`);
let eight = document.querySelector(`.eight`);
let nine = document.querySelector(`.nine`);

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
let div7 = document.createElement("div");
let div8 = document.createElement("div");
let div9 = document.createElement("div");

one.appendChild(div1);
two.appendChild(div2);
three.appendChild(div3);
four.appendChild(div4);
five.appendChild(div5);
six.appendChild(div6);
seven.appendChild(div7);
eight.appendChild(div8);
nine.appendChild(div9);

left.forEach((e) => {
  e.onclick = function (e) {
    window.localStorage.setItem("input", e.target.className);
    tine.play();

    document.querySelector(".chose .countainer h1").style.cssText = `
  animation:opacity3 .7s alternate ;opacity:0;
  `;
    document.querySelector(
      ".chose .countainer h2"
    ).style.cssText = `animation:opacity2 .7s alternate ;opacity:1;`;
    document.querySelector(
      ".play-area"
    ).style.cssText = `animation:scale .7s alternate ;transform:scale(1);`;
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
music.play()
  };
});

right.forEach((e) => {
  e.onclick = function (e) {
    window.localStorage.setItem("input", e.target.className);
    tine.play();
    document.querySelector(".chose .countainer h1").style.cssText = `
    animation:opacity3 .7s alternate ;opacity:0;
    `;
    document.querySelector(
      ".chose .countainer h2"
    ).style.cssText = `animation:opacity2 .7s alternate ;opacity:1;`;
    document.querySelector(
      ".play-area"
    ).style.cssText = `animation:scale .7s alternate ;transform:scale(1);`;
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
music.play()
  };
});

one.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div1.className = window.localStorage.getItem(`input`);
      div1.style.cssText = `cursor:no-drop;`;
      one.style.cssText = ` cursor:no-drop;`;

      //first
      if (
        div1.className === `X` &&
        div2.className === `X` &&
        div3.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div2.className === `circle` &&
        div3.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first

      //second
      if (
        div1.className === `X` &&
        div4.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div4.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second
      //third
      if (
        div1.className === `X` &&
        div5.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div5.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;

        //third
      }
      if (div1.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div1.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
      if (div1.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div1.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
    }
  },
  { once: true }
);

two.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div2.className = window.localStorage.getItem(`input`);
      div2.style.cssText = `cursor:no-drop;`;
      two.style.cssText = `cursor:no-drop;`;
      //first

      if (
        div1.className === `X` &&
        div2.className === `X` &&
        div3.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div2.className === `circle` &&
        div3.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div2.className === `X` &&
        div5.className === `X` &&
        div8.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div2.className === `circle` &&
        div5.className === `circle` &&
        div8.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second

      if (div2.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div2.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div2.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div2.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

three.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div3.className = window.localStorage.getItem(`input`);
      div3.style.cssText = `cursor:no-drop;`;
      three.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div1.className === `X` &&
        div2.className === `X` &&
        div3.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div2.className === `circle` &&
        div3.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div3.className === `X` &&
        div6.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div6.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second
      // third
      if (
        div3.className === `X` &&
        div5.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div5.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      // third

      if (div3.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div3.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div3.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div3.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

four.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div4.className = window.localStorage.getItem(`input`);
      div4.style.cssText = `cursor:no-drop;`;
      four.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div4.className === `X` &&
        div5.className === `X` &&
        div6.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div4.className === `circle` &&
        div5.className === `circle` &&
        div6.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div1.className === `X` &&
        div4.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div4.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second

      if (div4.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div4.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div4.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div4.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);
five.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div5.className = window.localStorage.getItem(`input`);
      div5.style.cssText = `cursor:no-drop;`;
      five.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div4.className === `X` &&
        div5.className === `X` &&
        div6.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div4.className === `circle` &&
        div5.className === `circle` &&
        div6.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div2.className === `X` &&
        div5.className === `X` &&
        div8.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div2.className === `circle` &&
        div5.className === `circle` &&
        div8.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second
      // third
      if (
        div3.className === `X` &&
        div5.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div5.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      // third
      //fourthly
      if (
        div1.className === `X` &&
        div5.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div5.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //fourthly

      if (div5.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div5.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div5.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div5.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

six.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div6.className = window.localStorage.getItem(`input`);
      div6.style.cssText = `cursor:no-drop;`;
      six.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div4.className === `X` &&
        div5.className === `X` &&
        div6.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div4.className === `circle` &&
        div5.className === `circle` &&
        div6.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div3.className === `X` &&
        div6.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div6.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second

      if (div6.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div6.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div6.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div6.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

seven.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div7.className = window.localStorage.getItem(`input`);
      div7.style.cssText = `cursor:no-drop;`;
      seven.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div7.className === `X` &&
        div8.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div7.className === `circle` &&
        div8.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div1.className === `X` &&
        div4.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div4.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second
      // third
      if (
        div3.className === `X` &&
        div5.className === `X` &&
        div7.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div5.className === `circle` &&
        div7.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      // third

      if (div7.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div7.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div7.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div7.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

eight.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div8.className = window.localStorage.getItem(`input`);
      div8.style.cssText = `cursor:no-drop;`;
      eight.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div7.className === `X` &&
        div8.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div7.className === `circle` &&
        div8.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div2.className === `X` &&
        div5.className === `X` &&
        div8.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div2.className === `circle` &&
        div5.className === `circle` &&
        div8.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second

      if (div8.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div8.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div8.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div8.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);

nine.addEventListener(
  "click",
  function () {
    tine.play();
    if (window.localStorage.getItem(`input`) === `X`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ O ]`;
    }
    if (window.localStorage.getItem(`input`) === `circle`) {
      document.querySelector(
        ".chose .countainer h2"
      ).innerHTML = `Turn Off [ X ]`;
    }
    if (
      window.localStorage.getItem(`input`) === `X` ||
      window.localStorage.getItem(`input`) === `circle`
    ) {
      div9.className = window.localStorage.getItem(`input`);
      div9.style.cssText = `cursor:no-drop;`;
      nine.style.cssText = `cursor:no-drop;`;
      //first
      if (
        div7.className === `X` &&
        div8.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div7.className === `circle` &&
        div8.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //first
      //second
      if (
        div3.className === `X` &&
        div6.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div3.className === `circle` &&
        div6.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //second
      //third
      if (
        div1.className === `X` &&
        div5.className === `X` &&
        div9.className === `X`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      if (
        div1.className === `circle` &&
        div5.className === `circle` &&
        div9.className === `circle`
      ) {
        winner.style.cssText = `animation: scale 1.5s alternate;
    transform: scale(1);
    display: flex;`;
      }
      //third
      if (div9.className === `circle`) {
        window.localStorage.setItem(`input`, `X`);
      }
      if (div9.className === `X`) {
        window.localStorage.setItem(`input`, `circle`);
      }
      if (div9.className === `circle`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ O ] winner`;
      }
      if (div9.className === `X`) {
        document.querySelector(
          ".winner .card h2"
        ).innerHTML = `palyer [ X ] winner`;
      }
    }
  },
  { once: true }
);
let darkMode = document.getElementById("dark-mode");
let switchee = document.getElementById("switch");
darkMode.onclick = function () {
  switchee.classList.toggle("move-left");
  document.body.classList.toggle(`dark`);
  header.style.cssText = `box-shadow:unset`;
  darkMode.classList.toggle("white");
  document.querySelector(".draw").classList.toggle("draw-toggle");
  document.querySelector(".draw-div").classList.toggle("draw-div-toggle");
};

button.onclick = function () {
  winner.style.cssText = `display:flex;
  animation: onload .2s linear;
  `;
  window.location.reload();
};

//draw-case
let draw = document.querySelector(".draw");

draw.addEventListener("click", function () {
  if (
    (div1.className === `circle` || div1.className === `X`) &&
    (div2.className === `circle` || div2.className === `X`) &&
    (div3.className === `circle` || div3.className === `X`) &&
    (div4.className === `circle` || div4.className === `X`) &&
    (div5.className === `circle` || div5.className === `X`) &&
    (div6.className === `circle` || div6.className === `X`) &&
    (div7.className === `circle` || div7.className === `X`) &&
    (div8.className === `circle` || div8.className === `X`) &&
    (div9.className === `circle` || div9.className === `X`)
  ) {
    window.location.reload();
  }
});

let play2 = document.querySelector(".play");
let pause = document.querySelector(".pause");

play2.onclick = function () {
  music.play();
};
pause.onclick = function () {
  music.pause();
};
