//1. 동기적인 방식 (syncgronous)
//2. 비동기적인 방식 (async)

//지금 fs라는 폴더에 있으니
//상위 폴더로 이동해서
//data라는 폴더로 이동해서
//hello.txt

// => "../data/hello.txt"

var path = require("path");
var fs = require("fs");

    
  
fs.readFile(
  path.join(__dirname, "../data/student.csv"),
  {encoding: "utf8"},
  function(error, data) {
    var rows= data.split("\n");
    console.log(rows);
    
  /*  for (var rowIndex=0; rowIndex<rows.length; rowIndex++) {
      var row =rows[rowIndex];
      var columns = row.split(",");
      console.log(columns);
    }
    
    */
  } //callback function
  );
  
  console.log("End readFile");