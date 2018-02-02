import { ENGINE_METHOD_CIPHERS } from "constants";

// Used to print directories files or folders as a list
// cmd
// dir / b > print.txt grab

// prints out timestamp of creation 
// dir > print.txt

var fs = require("fs");
var path = require("path");

// text to parse thru
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

// created array that holds all project name with numbers
// Using split to seperate unwanted text
var newArray = text.split("d----- 1/7/2018 9:06 PM ")

// go through array and remove new line
// character added by the template literal
for (var i = 0; i < newArray.length; i++) {
  newArray[i] = newArray[i].slice(0, -1);
}

// declaring an ampty array that
// will hold project names without numbers
var finishedArray = [];

// created an array of project names without numbers
// used slice to remove the first 3 letters from each
// item in the array
for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
  finishedArray.push(newArray[i].slice(3));
}

var linkArray = [];

// created object to hold both project names
// with and without numbers

// var arrOfObjects = {};

// for (var i = 0; i < newArray.length; i++) {
//   arrOfObjects[i] = {
//     name: newArray[i],
//     link: finishedArray[i]
//   };
// }
// console.log(arrOfObjects);

// seperating large array into 3 
// which represent each day of class
// for the weak
var day1 = newArray.slice(1, 7);
console.log(day1);

var day2 = newArray.slice(7, 15);
console.log(day2);

var day3 = newArray.slice(15, 25);
console.log(day3);


// (01-Class-Content/02-css-bootstrap/01-Activities/${link})

function createTable(arr1, arr2, arr3, unit) {

  // Grab folder name to create a file path
  var folderName = '05-timers'
  var weekNum = '05'

  // compare each day to see what the
  // height of the table will be
  var loopCount = Math.max(arr1.length, arr2.length, arr3.length);

  // var to hold completed string
  // initialized with table header data
  var template = `## Unit 5 - JavaScript / jQuery Review, Timers, & Debugger\n`
  template += `Day # 1 Activities|Day # 2 Activities|Day #3 Activities|Homework|Videos|\n`
  template += `|---|---|---|---|---|\n`

  // loop that will repeat as many times as the highest day
  // with activities which sets the height
  for (var i = 0; i < loopCount; i++) {

    // Array Parm #1
    var arrName1 = arr1[i] ? arr1[i] : "---";
    var arrLink1 = arr1[i] ? arr1[i] : "---";

    // Array Parm #2
    var arrName2 = arr2[i] ? arr2[i] : "---";
    var arrLink2 = arr2[i] ? arr2[i] : "---";

    // Array Parm #3
    var arrName3 = arr3[i] ? arr3[i] : "---";
    var arrLink3 = arr3[i] ? arr3[i] : "---";


    template += `|[${arrName1}](01-Class-Content/${folderName}/01-Activities/${arrLink1})`
    template += `|[${arrName2}](01-Class-Content/${folderName}/01-Activities/${arrLink2})`
    template += `|[${arrName3}](01-Class-Content/${folderName}/01-Activities/${arrLink3})|`

    // checks whether or not its the first line of the table to add ENGINE_METHOD_CIPHERS
    // the homework and video or blanks space
    if (i === 0) {
      template += `[Homework](01-Class-Content/${folderName}/02-Homework/Instructions)|`
      template += `[Video Guides Week ${weekNum}](02-lesson-plans/part-time/${weekNum}-Week/VideoGuide.md)|\n`
    } else {
      template += `---|---|\n`
    }

    console.log(template);

  }

  fs.appendFile("pleaseWork.txt", template, function (err) {
    if (err) throw err
    console.log("Saved!")
  });

}

createTable(day1, day2, day3)