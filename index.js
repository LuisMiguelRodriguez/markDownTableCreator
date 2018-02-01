var fs = require("fs");
var path = require("path");

var text = `
d----- 1/7/2018 9:06 PM 01-Hangman
d----- 1/7/2018 9:06 PM 02-CaptainPlanet 
d----- 1/7/2018 9:06 PM 03-LotteryGenerator 
d----- 1/7/2018 9:06 PM 04-CoinFlip 
d----- 1/7/2018 9:06 PM 05-This 
d----- 1/7/2018 9:06 PM 06-Timeout 
d----- 1/7/2018 9:06 PM 07-Context 
d----- 1/7/2018 9:06 PM 08-SimpleTimer 
d----- 1/7/2018 9:06 PM 09-Interval 
d----- 1/7/2018 9:06 PM 10-Stopwatch 
d----- 1/7/2018 9:06 PM 11-Slideshow 
d----- 1/7/2018 9:06 PM 12-Bash 
d----- 1/7/2018 9:06 PM 13-BubbleSort 
d----- 1/7/2018 9:06 PM 14-BuyLowSellHigh 
d----- 1/7/2018 9:06 PM 15-FileExtension 
d----- 1/7/2018 9:06 PM 16-FizzBuzz 
d----- 1/7/2018 9:06 PM 17-FloatsBoxModel 
d----- 1/7/2018 9:06 PM 18-GitGitHub 
d----- 1/7/2018 9:06 PM 19-IsPangram 
d----- 1/7/2018 9:06 PM 20-jQueryToDo 
d----- 1/7/2018 9:06 PM 21-MediaQueries 
d----- 1/7/2018 9:06 PM 22-PalindromeDetector 
d----- 1/7/2018 9:06 PM 23-PrimeChecker 
d----- 1/7/2018 9:06 PM 24-RecursiveFibonacci 
d----- 1/7/2018 9:06 PM 25-StringCalculator 
`;

var newArray = text.split("d----- 1/7/2018 9:06 PM ");

var finishedArray = [];

for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
  finishedArray.push(newArray[i].slice(3));
}

var bigString = newArray.join("");

// console.log(bigString)

// console.log(newArray);

var linkArray = [];

for (var i = 0; i < newArray.length; i++) {
  newArray[i] = newArray[i].slice(0, -1);
}

// console.log(newArray);

// console.log(finishedArray);

for (var i = 0; i < finishedArray.length; i++) {
  finishedArray[i] = finishedArray[i].slice(0, -1);
}

// console.log(finishedArray);

// var arrOfObjects = {};

// for (var i = 0; i < newArray.length; i++) {
//   arrOfObjects[i] = {
//     name: newArray[i],
//     link: finishedArray[i]
//   };
// }

// console.log(arrOfObjects);

//  var arrName1 = arr1[i].name
//  var arrLink1 = arr1[i].link

//  var arrName2 = arr2[i].name
//  var arrLink2 = arr2[i].link

//  var arrName3 = arr3[i].name
//  var arrLink3 = arr3[i].link

var day1 = newArray.slice(1, 7);
console.log(day1);

var day2 = newArray.slice(7, 15);
console.log(day2);

var day3 = newArray.slice(15, 25);
console.log(day3);

// `|[${arrName1}](01-Class-Content/02-css-bootstrap/01-Activities/${arrLink1})|`
// `|[${arrName2}](01-Class-Content/02-css-bootstrap/01-Activities/${arrLink2})|`
// `|[${arrName3}](01-Class-Content/02-css-bootstrap/01-Activities/${arrLink3})|`

// (01-Class-Content/02-css-bootstrap/01-Activities/${link})

function createTable(arr1, arr2, arr3, unit) {
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(unit);

  var loopCount = Math.max(arr1.length, arr2.length, arr3.length);

  console.log(loopCount);

  var longString =
    "## Unit 5 - JavaScript / jQuery Review, Timers, & Debugger \n";
  longString +=
    "Day # 1 Activities|Day # 2 Activities|Day #3 Activities|Homework|Videos|\n";
  longString += "|---|---|---|---|---|\n";

  fs.appendFile("pleaseWork.txt", longString, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  for (var i = 0; i < loopCount; i++) {
    var arrName1 = arr1[i] ? arr1[i] : "---";
    var arrLink1 = arr1[i] ? arr1[i] : "---";

    var arrName2 = arr2[i] ? arr2[i] : "---";
    var arrLink2 = arr2[i] ? arr2[i] : "---";

    var arrName3 = arr3[i] ? arr3[i] : "---";
    var arrLink3 = arr3[i] ? arr3[i] : "---";

    console.log(arrName1 + arrName2 + arrName3);

    longString +=
      "|" +
      " " +
      "[" +
      arrName1 +
      "](01-Class-Content/02-css-bootstrap/01-Activities/" +
      arrLink1 +
      ")" +
      " ";
    longString +=
      "|" +
      " " +
      "[" +
      arrName2 +
      "](01-Class-Content/02-css-bootstrap/01-Activities/" +
      arrLink2 +
      " )" +
      " ";
    longString +=
      "|" +
      " " +
      "[" +
      arrName3 +
      "](01-Class-Content/02-css-bootstrap/01-Activities/" +
      arrLink3 +
      ")|\n";
  }

  console.log(longString);
}

createTable(day1, day2, day3);
