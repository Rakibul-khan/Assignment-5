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

// Copy Button function
let buttons = document.querySelectorAll(".copy-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let container = button.closest("div.flex");

    let card = container.previousElementSibling;

    let h1 = card.querySelector("h1");
    let text = h1.innerText;

    let temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("Copied: " + text);
    let copyCount = document.getElementById("copy-count");
    let parseCopyCount = parseInt(copyCount.innerHTML);
    copyCount.innerHTML = ++parseCopyCount;
  });
});

//Calling Button Functionality
let coinBalance = parseInt(document.getElementById("coin-count").innerText);
let coinCountBtn = document.getElementById("coin-count");

function CallFunction(emergencyTitle, emergencyNumber) {
  if (coinBalance <= 0) {
    alert("You don't have enough coins");
    return;
  }
  coinBalance -= 20;
  if (coinBalance < 0) coinBalance = 0;
  coinCountBtn.innerText = coinBalance;

  alert(`Calling to ${emergencyTitle.innerText},${emergencyNumber.innerText}`);

  let current = new Date();
  let time = current
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: "true",
    })
    .toUpperCase();

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

  newCreatedDiv.innerHTML = `<div><h1 class ="font-bold text-sm">${emergencyTitle.innerText}</h1>
  <p>${emergencyNumber.innerText}</p></div>
  <div>${time}</div>`;
  historyList.appendChild(newCreatedDiv);
}

//Button 1 calling the function
document
  .getElementById("call-emergency-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title"),
      document.getElementById("emergency-number")
    )
  );

//Button 2 calling function
document
  .getElementById("police-helpline-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title2"),
      document.getElementById("emergency-number3")
    )
  );
//Button 3 calling function
document
  .getElementById("fire-service-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title3"),
      document.getElementById("emergency-number3")
    )
  );

//Button 4 calling function
document
  .getElementById("ambulance-helpline-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title4"),
      document.getElementById("emergency-number4")
    )
  );

//Button 5 calling function
document
  .getElementById("women-child-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title5"),
      document.getElementById("emergency-number5")
    )
  );

// Button 6 calling function
document
  .getElementById("anti-corruption-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title6"),
      document.getElementById("emergency-number6")
    )
  );

//Button 7 calling function
document
  .getElementById("electricity-helpline-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title7"),
      document.getElementById("emergency-number7")
    )
  );

//Button 8 calling function
document
  .getElementById("brac-helpline-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title8"),
      document.getElementById("emergency-number8")
    )
  );
//Button 9 calling function
document
  .getElementById("railway-helpline-btn")
  .addEventListener("click", () =>
    CallFunction(
      document.getElementById("emergency-title9"),
      document.getElementById("emergency-number9")
    )
  );

//Clear Button Functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  let callHistoryList = document.getElementById("all-history-list");
  callHistoryList.innerHTML = "";
});
