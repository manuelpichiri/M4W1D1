function sum(number1, number2) {
  if (number1 > 50 || number2 > 50 || number1 + number2 === 50) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
sum(50, 0);

function removeChar(string1, charPosition) {
  const char = string1.split("");
  char[charPosition] = "";
  let string = char.join("");
  console.log(string);
}
removeChar("prova", 2);

function numberIncluded(number3, number4) {
  if (
    40 <= number3 <= 60 &&
    40 <= number4 <= 60 &&
    70 <= number3 <= 100 &&
    70 <= number4 <= 100
  ) {
    {
      return console.log("true");
    }
  } else {
    return console.log("false");
  }
}
numberIncluded(40, 70);

function returnString(string2) {
  const lower = string2.toLowerCase();
  if (lower.includes("new") || lower.includes("los")) {
    return console.log(lower);
  } else {
    return console.log("false");
  }
}
returnString("Los angeles");

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [2, 4, 5, 6, 7, 8, 9];

function returnArraySum(array1) {
  const sum = array1.reduce((current, param) => current + param, 0);
  return console.log(sum);
}

returnArraySum(array1);

function arrayInclude(array1) {
  if (array1.includes(1) || array1.includes(3)) {
    return console.log("false");
  } else {
    return console.log("true");
  }
}

arrayInclude(array1);
arrayInclude(array2);

function findAngle(angle1) {
  switch (true) {
    case angle1 < 90:
      console.log("acuto");
      break;
    case angle1 === 180:
      console.log("piatto");
      break;
    case angle1 === 90:
      console.log("retto");
      break;
    case angle1 >= 90 && angle1 <= 180:
      console.log("ottuso");
      break;
    default:
      console.log("non hai inserito un valore corretto");
  }
}
findAngle(180);
findAngle(90);
findAngle(95);
findAngle(70);
findAngle(360);

let string4 = "Porco Rosso Di Miyazaki";

function acronymOfString(string4) {
  const maiusc = /[A-Z]/g;

  const findMaiusc = string4.match(maiusc);

  console.log(findMaiusc.join(""));
}

acronymOfString(string4);
