var fs = require("fs");
var dirToJson = require('dir-to-json');
const dto = require('directory-to-object')
const path = require('path')

dirToJson("C:/UCI-Lesson-Plans/01-Class-Content", function (err, dirTree) {
    if (err) {
        throw err;
    } else {

        var objDir = {}

        for (var i = 0; i < dirTree.children.length; i++) {
            console.log(i)


            objDir[dirTree.children[i].name] = dirTree.children[i].children

            var loopCount = dirTree.children[i].children[0].children.length

            // console.log('-------------------------');
            var arr = []

            for (var j = 0; j < loopCount; j++) {
                // pushing each item into the array
                // this is just copying the array
                arr.push(dirTree.children[i].children[0].children[j].name)
                // console.log(dirTree.children[i].children[0].children[j].name)

            }

            // i now assign the value of objDir[nameofactivity]
            // the copy of the array we made 
            objDir[dirTree.children[i].name] = arr.sort()

            fs.writeFile('./classObject9.json', JSON.stringify(objDir), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!')
            })

        }

    }
});

