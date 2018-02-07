var rawText = `
01-html-git-css
02-css-bootstrap
03-javascript
04-jquery
05-timers
06-aja
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
var title = [
    "## Unit 1 - Intro to Web Development, HTML / CSS, and Git",
    "## Unit 2 - Github Pages Deployments and Bootstrap",
    "## Unit 3 - Intro to JavaScript",
    "## Unit 4 - Intro to jQuery",
    "## Unit 5 - JavaScript / jQuery Review, Timers, & Debugger",
    "## Unit 6 - Introduction to APIs and AJAX",
    "## Unit 7 - Data Persistence with Local and Server Storage",
    "## Unit 8 - Project #1 - Week 1",
    "## Week 9 - API Project Week 2",
    "## Unit 10 - Introduction to Node and NPM",
    "## Unit 11 - Intro to Constructors and Callbacks",
    "## Unit 12 - Intro to MySQL",
    "## Unit 13 - Intro to Express",
    "## Week 14 - Node, Express, and Handlebars",
    "## Week 15 - Sequelized",
    "## Week 16 - Introduction to Testing",
    "## Week 17 - API Project Week 2 + Interview Questions",
    "## Week 18 - Introduction to MongoDB",
    "## Week 19 - React",
    "## Week 20 - React Continued",
    "## Week 21 - Regional Content",
    "## Week 22 - Computer Science",
    "## Unit 23 - Portfolios and Projects"]


// created array that holds all project name with numbers
// Using split to seperate unwanted text
var arrSection = rawText.split("\n");

var sectionTemplate = '<select name="slct" id="selectSection"><option>Select Week</option>'
// var sectionTemplate2 = '<select name="slct" id="selectWeek"><option>Select Week</option>'

//Create list of options for selector 
for (var i of arrSection) {

    sectionTemplate += `<option value="${i}">${i}</option>`


}

// for (property in activities) {
//     sectionTemplate2 += `<option value="${property}">${property}</option>`
// }

sectionTemplate += '</select>'
// sectionTemplate2 += '</select>'

$('#selectSection').html(sectionTemplate)
// $('#select-week').html(sectionTemplate2)

// // create option list of all activites
// var selectWeek = '<select id="selectWeek" class="my-1 mr-2" name="selectWeek"  required><option>#</option>'

// for(var property in activities){

//     for(var i = 0; i < property.length){

//     }
//     selectWeek += `<option value="${i}>${i}</option`
// }

var selectDay1 = '<select id="selectDay1" class="my-1 mr-2" name="day1"  required><option>#</option>'

var selectDay2 = '<select id="selectDay2"" name="day2" required><option>#</option>'

for (var i = 1; i < 16; i++) {

    selectDay1 += `<option value="${i}">${i}</option>`

    selectDay2 += `<option value="${i}">${i}</option>`
}

// selectWeek += '</select>'

selectDay1 += '</select>'
selectDay2 += '</select>'

$('#selectDay1').html(selectDay1)


$('#selectDay2').html(selectDay2)




$('#submit-1').on("click", function (event) {
    event.preventDefault()
    var weekName = $('#selectSection option:selected')
        .text()
    console.log(weekName);

    var weekNum = weekName.slice(0, 2)

    var day1 = $('#selectDay1 option:selected')
        .text()
    var d1 = parseInt(day1)

    var arr1 = activities[weekName].slice(0, d1)

    var day2 = $('#selectDay2 option:selected')
        .text()
    var d2 = parseInt(day2)
    console.log(day2)



    console.log('value of day 1 ' + day1)
    console.log('value of day 2 ' + day2)

    var arr2 = activities[weekName].slice(d1, d2 + d1)
    var arr3 = activities[weekName].slice(d2 + d1)

    createTable(weekName, weekNum, arr1, arr2, arr3)
})

$('#submit-2').on("click", function (event) {
    event.preventDefault()
    var weekName = $('#select-week option:selected')
        .text()

    var arr1 = activities[weekName]

    createMarkdown(weekName, weekNum, arr1, arr2, arr3)
})

// $(document).on('change', '#selectWeek', function (event) {
//     console.log('blah')
//     var weekName = $('#selectWeek option:selected').text()

//     console.log(weekName)
//     var tempArr = []
//     var sectionTemplate = '<select name="slct" id="selectWeek"><option>Select Week</option>'
//     for (var i = 0; i < activities[weekName].length; i++) {

//         tempArr.push(activities[weekName][i])

//     }

//     for (var i = 0; i < tempArr.length; i++) {

//         sectionTemplate += `<option value="${tempArr[i]}">${tempArr[i]}</option>`
//     }

//     sectionTemplate += `</select`

//     $('#selectActivity').html(sectionTemplate);

// });



function createTable(weekName, weekNum, arr1, arr2, arr3, unit) {


    // compare each day to see what the
    // height of the table will be
    var loopCount = Math.max(arr1.length, arr2.length, arr3.length);

    // var to hold completed string
    // initialized with table header data

    var template = title[weekNum - 1]
    template += '\n'
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
