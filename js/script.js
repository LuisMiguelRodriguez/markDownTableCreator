var rawText = `
01-html-git-css
02-css-bootstrap
03-javascript
04-jquery
05-timers
06-ajax
07-firebase
10-nodejs
11-js-constructors
12-mysql
13-express
14-handlebars
15-sequelize
16-testing
18-mongo-mongoose
19-react
20-react
21-regionalized-content
22-computer-science
23-other-languages
`

var activities = [
    "01-CustomerObject", "02-Ajax_OMDB", "03-AJAX_to_HTML", "04-Giphy_API",
    "05-Bujumbura", "06-MovieJSONDump", "07-MovieButtonLayout", "08-LogMovieName",
    "09-ClickJSON", "10-WorkingMovieApp", "11-BandsInTownApp", "12-CatButton",
    "13-ButtonTriggeredAJAX", "14-DynamicElements", "15-PausingGifs", "16-NYTSearch"]

// created array that holds all project name with numbers
// Using split to seperate unwanted text
var arrSection = rawText.split("\n");

var sectionTemplate = '<select name="slct" id="selectSection"><option>Section to Choose</option>'

//Create list of options for selector 
for (var i of arrSection) {

    sectionTemplate += `<option value="${i}">${i}</option>`

}

sectionTemplate += '</select>'


$('#selectSection').html(sectionTemplate)


var selectDay1 = '<select id="selectDay1" name="day1"  required><option>#</option>'

for (var i = 1; i < 16; i++) {

    selectDay1 += `<option value="${i}">${i}</option>`

}


selectDay1 += '</select>'

$('#selectDay1').html(selectDay1)

var selectDay2 = '<select id="selectDay2"" name="day2" required><option>#</option>'

for (var i = 1; i < 16; i++) {

    selectDay2 += `<option value="${i}">${i}</option>`

}

selectDay2 += '</select>'

$('#selectDay2').html(selectDay2)

var selectDay3 = '<select id="selectDay3 name="day3" "required><option>#</option>'

for (var i = 1; i < 16; i++) {

    selectDay3 += `<option value="${i}">${i}</option>`

}

selectDay3 += '</select>'

$('#selectDay3').html(selectDay3)

$('#submit').on("click", function (event) {
    event.preventDefault()
    var weekName = $('#selectSection option:selected')
        .text()
    var weekNum = weekName.slice(0, 2)

    var day1 = $('#selectDay1 option:selected')
        .text()
    var d1 = parseInt(day1)

    var arr1 = activities.slice(0, d1)

    var day2 = $('#selectDay2 option:selected')
        .text()
    var d2 = parseInt(day2)
    console.log(day2)



    console.log('value of day 1 ' + day1)
    console.log('value of day 2 ' + day2)

    var arr2 = activities.slice(d1, d2 + d1)
    var arr3 = activities.slice(d2 + d1)

    createTable(weekName, weekNum, arr1, arr2, arr3)
})



function createTable(weekName, weekNum, arr1, arr2, arr3, unit) {


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
        var arrName1 = arr1[i] ? arr1[i].toString() : "---";
        var arrLink1 = arr1[i] ? arr1[i].toString() : "---";

        // Array Parm #2
        var arrName2 = arr2[i] ? arr2[i].toString() : "---";
        var arrLink2 = arr2[i] ? arr2[i].toString() : "---";

        // Array Parm #3
        var arrName3 = arr3[i] ? arr3[i].toString() : "---";
        var arrLink3 = arr3[i] ? arr3[i].toString() : "---";


        template += `|[${arrName1}](01-Class-Content/${weekName}/01-Activities/${arrLink1})`
        template += `|[${arrName2}](01-Class-Content/${weekName}/01-Activities/${arrLink2})`
        template += `|[${arrName3}](01-Class-Content/${weekName}/01-Activities/${arrLink3})|`

        // checks whether or not its the first line of the table to add ENGINE_METHOD_CIPHERS
        // the homework and video or blanks space
        if (i === 0) {
            template += `[Homework](01-Class-Content/${weekName}/02-Homework/Instructions)|`
            template += `[Video Guides Week ${weekNum}](02-lesson-plans/part-time/${weekNum}-Week/VideoGuide.md)|\n`
        } else {
            template += `---|---|\n`
        }

        console.log(template);

        $('#results').html(template)

    }


}