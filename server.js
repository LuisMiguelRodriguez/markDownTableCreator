var fs = require("fs");
var dirToJson = require('dir-to-json');
const dto = require('directory-to-object')
const path = require('path')


// var fileDir = "UCI-Lesson-Plans/01-Class-Content"
// dto(path.resolve('../../UCI-Lesson-Plans/01-Class-Content'), (err, res) => {
//     console.log(res)
//     fs.appendFile("dirPrint.json", res, function (err) {
//         if (err) throw err
//         console.log("Saved!")
//     });

//     fs.writeFile('./users.json', JSON.stringify(res), 'utf-8', function (err) {
//         if (err) throw err
//         console.log('Done!')
//     })
// })

// {
//   fooDir: [file1, file2, file3],
//   barDir: [file4, file5, file6]
// }

// dto(fileDir, (err, res) => console.log(res))

dirToJson("C:/UCI-Lesson-Plans/01-Class-Content", function (err, dirTree) {
    if (err) {
        throw err;
    } else {

        var objDir = {}

        for (var i = 0; i < dirTree.children.length; i++) {
            console.log(i)
            // weekNames.push(dirTree.children[i].name)
            // activityNames.push(dirTree.children[i].name)
            // console.log(objDir[dirTree.children[i].name])
            // console.log(dirTree.children[i].children)

            objDir[dirTree.children[i].name] = dirTree.children[i].children
            // console.log(dirTree.children[i].name)
            // console.log(objDir[dirTree.children[i].name])
            // console.log('-----------------------------------------------------')
            //     objDir2[dirTree.children[i].name] = ][]
            // }

            // console.log(dirTree.children[i].name)



            // console.log('name of property' + dirTree.children[i].name)

            var loopCount = dirTree.children[i].children[0].children.length

            // console.log('-------------------------');
            var arr = []

            for (var j = 0; j < loopCount; j++) {

                // console.log(lo5pCount);
                // console.log(j)
                // var x = dirTree.children[i].name
                // console.log(x)
                // console.log('-----------------------------------------------------')

                arr.push(dirTree.children[i].children[0].children[j].name)
                // console.log(dirTree.children[i].children[0].children[j].name)

            }
            objDir[dirTree.children[i].name] = arr.sort()

            fs.writeFile('./classObject9.json', JSON.stringify(objDir), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!')
            })
            // console.log(arr.sort)
            // console.log('Is this an array ? ======================')
            // console.log(Array.isArray(arr))
            // console.log(dirTree.children[i].name)
            // objDir2[dirTree.children[i].name] = arr.sort()
            // console.log(objDir2[])
        }
        // console.log(weekNames);
        // console.log(objDir)

        // fs.writeFile('./classObject8.json', JSON.stringify(objDir), 'utf-8', function (err) {
        //     if (err) throw err
        //     console.log('Done!')
        // })

    }
});

