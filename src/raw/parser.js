var fs = require("fs");
var Constants = require("../constants/constants");
var data = require("./data");

var pickup = "";
var output = [];

for ( var j = 0; j <= 6; j++){
	output[j] = [];
	for ( var i = 0; i < data.length; i++) {
		if( data[i][j+3] ) {
			if ( data[i][1] == pickup ) {
				output[j][output[j].length-1][2] = output[j][output[j].length-1][2].concat(",", data[i][2]);
			} else {
				pickup = data[i][1];
				output[j].push([data[i][0], data[i][1], data[i][2]]);
			}
		}
	}
}

var arrange = [];
for ( var i = 0; i < Constants.listType.length; i++) {
	arrange[i] = [];
	for ( var j = 0; j < output.length; j++ ){
		arrange[i][j] = [];
		for ( var k = 0; k < output[j].length; k++ ){
			if ( output[j][k][0] == Constants.listType[i] ) {
				arrange[i][j].push([output[j][k][0], output[j][k][1], output[j][k][2]]);
			}
		}
	}
}

console.log("data.json arrange complete!");
fs.writeFileSync("./src/raw/data.json", JSON.stringify(arrange));