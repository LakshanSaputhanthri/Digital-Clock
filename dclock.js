const pattern = {
  0: ["1", "2", "3", "5", "6", "7"],
  1: ["6", "7"],
  2: ["2", "3", "4", "5", "6"],
  3: ["3", "4", "5", "6", "7"],
  4: ["1", "4", "6", "7"],
  5: ["1", "3", "4", "5", "7"],
  6: ["1", "2", "3", "4", "5", "7"],
  7: ["3", "6", "7"],
  8: ["1", "2", "3", "4", "5", "6", "7"],
  9: ["1", "3", "4", "5", "6", "7"],
};
const pattern2 = {
  0: ["8", "9", "10", "12", "13", "14"],
  1: ["13", "14"],
  2: ["9", "10", "11", "12", "13"],
  3: ["10", "11", "12", "13", "14"],
  4: ["8", "11", "13", "14"],
  5: ["8", "10", "11", "12", "14"],
  6: ["8", "9", "10", "11", "12", "14"],
  7: ["10", "13", "14"],
  8: ["8", "9", "10", "11", "12", "13", "14"],
  9: ["8", "10", "11", "12", "13", "14"],
};
const pattern3 = {
  0: ["15", "16", "17", "19", "20", "21"],
  1: ["20", "21"],
  2: ["16", "17", "18", "19", "20"],
  3: ["17", "18", "19", "20", "21"],
  4: ["15", "18", "20", "21"],
  5: ["15", "17", "18", "19", "21"],
  6: ["15", "16", "17", "18", "19", "21"],
  7: ["17", "20", "21"],
  8: ["15", "16", "17", "18", "19", "20", "21"],
  9: ["15", "17", "18", "19", "20", "21"],
};
const pattern4 = {
  0: ["22", "23", "24", "26", "27", "28"],
  1: ["27", "28"],
  2: ["23", "24", "25", "26", "27"],
  3: ["24", "25", "26", "27", "28"],
  4: ["22", "25", "27", "28"],
  5: ["22", "24", "25", "26", "28"],
  6: ["22", "23", "24", "25", "26", "28"],
  7: ["24", "27", "28"],
  8: ["22", "23", "24", "25", "26", "27", "28"],
  9: ["22", "24", "25", "26", "27", "28"],
};
const pattern5 = {
  0: ["29", "30", "31", "33", "34", "35"],
  1: ["34", "35"],
  2: ["30", "31", "32", "33", "34"],
  3: ["31", "32", "33", "34", "35"],
  4: ["29", "32", "34", "35"],
  5: ["29", "31", "32", "33", "35"],
  6: ["29", "30", "31", "32", "33", "35"],
  7: ["31", "34", "35"],
  8: ["29", "30", "31", "32", "33", "34", "35"],
  9: ["29", "31", "32", "33", "34", "35"],
};
const pattern6 = {
  0: ["36", "37", "38", "40", "41", "42"],
  1: ["41", "42"],
  2: ["37", "38", "39", "40", "41"],
  3: ["38", "39", "40", "41", "42"],
  4: ["36", "39", "41", "42"],
  5: ["36", "38", "39", "40", "42"],
  6: ["36", "37", "38", "39", "40", "42"],
  7: ["38", "41", "42"],
  8: ["36", "37", "38", "39", "40", "41", "42"],
  9: ["36", "38", "39", "40", "41", "42"],
};

let date = new Date();
let hour = date.getHours();
//set status
const statuss = document.getElementById("status");
if (hour >= 12) {
  statuss.innerHTML = "pm";
} else {
  statuss.innerHTML = "am";
}
//blink circle seconds
const thirdCircle = document.getElementById("thirdCircle");
const fourthCircle = document.getElementById("fourthCircle");
const firstCircle = document.getElementById("firstCircle");
const secondCircle = document.getElementById("secondCircle");
let blinkerOnSeconds = setTimeout(onViewSec, 1000);

function onViewSec() {
  thirdCircle.className = "circle on-view-circle";
  fourthCircle.className = "circle on-view-circle";
  firstCircle.className = "circle on-view-circle";
  secondCircle.className = "circle on-view-circle";
  setTimeout(noViewSec, 1000);
}
function noViewSec() {
  thirdCircle.className = "circle no-view-circle";
  fourthCircle.className = "circle no-view-circle";
  firstCircle.className = "circle no-view-circle";
  secondCircle.className = "circle no-view-circle";
  setTimeout(onViewSec, 1000);
}

//Set second Digit in seconds section
function setSeconDigitInSeconds() {
  const date = new Date();
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let secondsStr = seconds.toString();
  let secondDigitInSecond = pattern[parseInt(secondsStr[1])];
  let length = secondDigitInSecond.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(secondDigitInSecond[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass(secondDigitInSecond);
  }, 1000);
}
function delClass(secondDigitInSecond) {
  for (let i = 0; i < secondDigitInSecond.length; i++) {
    let on = document.getElementById(secondDigitInSecond[i]);
    on.className = "no-view";
  }
  setSeconDigitInSeconds();
}

//Set first Digit in seconds section
function setFirstDigitInSeconds() {
  const date = new Date();
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let secondsStr = seconds.toString();
  let firstDigitInSec = pattern2[parseInt(secondsStr[0])];
  let length = firstDigitInSec.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(firstDigitInSec[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass1(firstDigitInSec);
  }, 999);
}
function delClass1(firstDigitInSec) {
  for (let i = 0; i < firstDigitInSec.length; i++) {
    let on = document.getElementById(firstDigitInSec[i]);
    on.className = "no-view";
  }
  setTimeout(setFirstDigitInSeconds, 1);
}
//Set second Digit in Minutes section
function setSeconDigitInMinutes() {
  const date = new Date();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let minutesStr = minutes.toString();
  let secondDigitInMinute = pattern3[parseInt(minutesStr[1])];
  let length = secondDigitInMinute.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(secondDigitInMinute[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass3(secondDigitInMinute);
  }, 999);
}
function delClass3(secondDigitInMinute) {
  for (let i = 0; i < secondDigitInMinute.length; i++) {
    let on = document.getElementById(secondDigitInMinute[i]);
    on.className = "no-view";
  }
  setTimeout(setSeconDigitInMinutes, 1);
}
//Set second Digit in Minutes section
function setFirstDigitInMinutes() {
  const date = new Date();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let minuteStr = minutes.toString();
  let minutesDigitInSecond = pattern4[parseInt(minuteStr[0])];
  let length = minutesDigitInSecond.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(minutesDigitInSecond[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass4(minutesDigitInSecond);
  }, 999);
}
function delClass4(minutesDigitInSecond) {
  for (let i = 0; i < minutesDigitInSecond.length; i++) {
    let on = document.getElementById(minutesDigitInSecond[i]);
    on.className = "no-view";
  }
  setTimeout(setFirstDigitInMinutes, 1);
}
//Set first Digit in Minutes section
function setSeconDigitInMinutes() {
  const date = new Date();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let minutesStr = minutes.toString();
  let secondDigitInMinute = pattern3[parseInt(minutesStr[1])];
  let length = secondDigitInMinute.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(secondDigitInMinute[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass3(secondDigitInMinute);
  }, 999);
}
function delClass3(secondDigitInMinute) {
  for (let i = 0; i < secondDigitInMinute.length; i++) {
    let on = document.getElementById(secondDigitInMinute[i]);
    on.className = "no-view";
  }
  setTimeout(setSeconDigitInMinutes, 1);
}
//Set second Digit in Hour section
function setSecondDigitInHours() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  let hoursStr = hours.toString();
  let secondDigitInHours = pattern5[parseInt(hoursStr[1])];
  let length = secondDigitInHours.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(secondDigitInHours[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass5(secondDigitInHours);
  }, 999);
}
function delClass5(secondDigitInHours) {
  for (let i = 0; i < secondDigitInHours.length; i++) {
    let on = document.getElementById(secondDigitInHours[i]);
    on.className = "no-view";
  }
  setTimeout(setSecondDigitInHours, 1);
}
//Set first Digit in Hour section
function setFirstDigitInHours() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  let hoursStr = hours.toString();
  let firstDigitInHours = pattern6[parseInt(hoursStr[0])];
  let length = firstDigitInHours.length;

  for (let i = 0; i < length; i++) {
    let on = document.getElementById(firstDigitInHours[i]);
    on.className = "on-view";
  }
  setTimeout(function () {
    delClass6(firstDigitInHours);
  }, 1000);
}
function delClass6(firstDigitInHours) {
  for (let i = 0; i < firstDigitInHours.length; i++) {
    let on = document.getElementById(firstDigitInHours[i]);
    on.className = "no-view";
  }
  setFirstDigitInHours();
}
setFirstDigitInMinutes();
setSeconDigitInSeconds();
setFirstDigitInSeconds();
setSeconDigitInMinutes();
setFirstDigitInHours();
setSecondDigitInHours();
