var fs = require("fs");
var path = require("path");

fs.readFile(
    path.join(__dirname, "../data/student.csv"),
    {encoding: "utf8"},
    function(error, data) {
        var students = [];
        var rows = data.split("\n");
        
        for (var rowIndex=0; rowIndex<rows.length; rowIndex++) {
            var columns = rows[rowIndex].split(",");
            
            if (rowIndex===0) {
                var headers = columns;
            }
            else 
            var student = {};
            for (var columnindex=0; columnindex<headers.length; columnindex++) {
                student[headers[columnindex]] = columns[columnindex];
                students.push(student);
            }
        }
        console.log(students);
        
        

        
        /*
        for (var j=0; j<row.length; j++) {
            var id[row.length] = row[0];
            var name[row.length] = row[1];
            var email[row.length] = row[2];
            var phonenumber[row.length] = row[3];
        }
        */
    }
);