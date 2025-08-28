//Heart functionality
let heartFunction = document.getElementsByClassName("fa-heart");
let parseHeartFunction = parseInt(heartFunction);
let heartCount = document.getElementById("heart-count");
let parseHeartCount = parseInt(heartCount.innerHTML);
for (let heart of heartFunction) {
  heart.addEventListener("click", function () {
    heartCount.innerHTML = parseHeartCount++;
  });
}

//Calling functionality
//Button 1
let emergencyNumber = document.getElementById("emergency-number");
let emergencyTitle = document.getElementById("emergency-title");
let coinCount = document.getElementById("coin-count");
let parseCoinCount = parseInt(coinCount.innerHTML);
document
  .getElementById("call-emergency-btn")
  .addEventListener("click", function () {
    if (parseCoinCount === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle.innerText} , ${emergencyNumber.innerText}`
      );
    }
    let minusCoinCount = (parseCoinCount -= 20);
    coinCount.innerHTML = minusCoinCount;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle.innerHTML}</h1>
    <p>${emergencyNumber.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 2
let emergencyNumber2 = document.getElementById("emergency-number2");
let emergencyTitle2 = document.getElementById("emergency-title2");
let coinCount2 = document.getElementById("coin-count");
let parseCoinCount2 = parseInt(coinCount.innerHTML);
document
  .getElementById("police-helpline-btn")
  .addEventListener("click", function () {
    if (parseCoinCount2 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle2.innerText} , ${emergencyNumber2.innerText}`
      );
    }
    let minusCoinCount2 = (parseCoinCount2 -= 20);
    coinCount2.innerHTML = minusCoinCount2;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle2.innerHTML}</h1>
    <p>${emergencyNumber2.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 3
let emergencyNumber3 = document.getElementById("emergency-number3");
let emergencyTitle3 = document.getElementById("emergency-title3");
let coinCount3 = document.getElementById("coin-count");
let parseCoinCount3 = parseInt(coinCount.innerHTML);
document
  .getElementById("fire-service-btn")
  .addEventListener("click", function () {
    if (parseCoinCount2 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle3.innerText} , ${emergencyNumber3.innerText}`
      );
    }
    let minusCoinCount3 = (parseCoinCount3 -= 20);
    coinCount3.innerHTML = minusCoinCount3;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle3.innerHTML}</h1>
    <p>${emergencyNumber3.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 4
let emergencyNumber4 = document.getElementById("emergency-number4");
let emergencyTitle4 = document.getElementById("emergency-title4");
let coinCount4 = document.getElementById("coin-count");
let parseCoinCount4 = parseInt(coinCount.innerHTML);
document
  .getElementById("ambulance-helpline-btn")
  .addEventListener("click", function () {
    if (parseCoinCount2 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle4.innerText} , ${emergencyNumber4.innerText}`
      );
    }
    let minusCoinCount4 = (parseCoinCount4 -= 20);
    coinCount4.innerHTML = minusCoinCount4;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle4.innerHTML}</h1>
    <p>${emergencyNumber4.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 5
let emergencyNumber5 = document.getElementById("emergency-number5");
let emergencyTitle5 = document.getElementById("emergency-title5");
let coinCount5 = document.getElementById("coin-count");
let parseCoinCount5 = parseInt(coinCount5.innerHTML);
document
  .getElementById("women-child-btn")
  .addEventListener("click", function () {
    if (parseCoinCount5 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle5.innerText} , ${emergencyNumber5.innerText}`
      );
    }
    let minusCoinCount5 = (parseCoinCount5 -= 20);
    coinCount5.innerHTML = minusCoinCount5;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle5.innerHTML}</h1>
    <p>${emergencyNumber5.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 6
let emergencyNumber6 = document.getElementById("emergency-number6");
let emergencyTitle6 = document.getElementById("emergency-title6");
let coinCount6 = document.getElementById("coin-count");
let parseCoinCount6 = parseInt(coinCount6.innerHTML);
document
  .getElementById("anti-corruption-btn")
  .addEventListener("click", function () {
    if (parseCoinCount6 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle6.innerText} , ${emergencyNumber6.innerText}`
      );
    }
    let minusCoinCount6 = (parseCoinCount6 -= 20);
    coinCount6.innerHTML = minusCoinCount6;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle6.innerHTML}</h1>
    <p>${emergencyNumber6.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });
//Button 7
let emergencyNumber7 = document.getElementById("emergency-number7");
let emergencyTitle7 = document.getElementById("emergency-title7");
let coinCount7 = document.getElementById("coin-count");
let parseCoinCount7 = parseInt(coinCount7.innerHTML);
document
  .getElementById("electricity-helpline-btn")
  .addEventListener("click", function () {
    if (parseCoinCount7 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle7.innerText} , ${emergencyNumber7.innerText}`
      );
    }
    let minusCoinCount7 = (parseCoinCount7 -= 20);
    coinCount7.innerHTML = minusCoinCount7;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle7.innerHTML}</h1>
    <p>${emergencyNumber7.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 8
let emergencyNumber8 = document.getElementById("emergency-number8");
let emergencyTitle8 = document.getElementById("emergency-title8");
let coinCount8 = document.getElementById("coin-count");
let parseCoinCount8 = parseInt(coinCount8.innerHTML);
document
  .getElementById("brac-helpline-btn")
  .addEventListener("click", function () {
    if (parseCoinCount8 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle8.innerText} , ${emergencyNumber8.innerText}`
      );
    }
    let minusCoinCount8 = (parseCoinCount8 -= 20);
    coinCount8.innerHTML = minusCoinCount8;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle8.innerHTML}</h1>
    <p>${emergencyNumber8.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Button 9

let emergencyNumber9 = document.getElementById("emergency-number9");
let emergencyTitle9 = document.getElementById("emergency-title9");
let coinCount9 = document.getElementById("coin-count");
let parseCoinCount9 = parseInt(coinCount9.innerHTML);
document
  .getElementById("railway-helpline-btn")
  .addEventListener("click", function () {
    if (parseCoinCount9 === 0) {
      alert(`You don't have enough coin`);
    } else {
      alert(
        `Calling, ${emergencyTitle9.innerText} , ${emergencyNumber9.innerText}`
      );
    }
    let minusCoinCount9 = (parseCoinCount9 -= 20);
    coinCount9.innerHTML = minusCoinCount9;

    //Dynamically Added history
    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let timeUpperCase = time.toUpperCase();

    let historyList = document.getElementById("all-history-list");
    historyList.classList.add("p-3");
    let newCreatedDiv = document.createElement("div");
    newCreatedDiv.classList.add(
      "bg-gray-200",
      "p-3",
      "flex",
      "gap-3",
      "mb-3",
      "rounded-lg"
    );
    newCreatedDiv.innerHTML = `<div ><h1 class='font-bold text-sm'>${emergencyTitle9.innerHTML}</h1>
    <p>${emergencyNumber9.innerHTML}</p></div>
<div>${timeUpperCase}</div>
    `;
    historyList.appendChild(newCreatedDiv);
  });

//Clear Button Functionality
let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  document.getElementById("all-history-list").innerHTML = "";
});
